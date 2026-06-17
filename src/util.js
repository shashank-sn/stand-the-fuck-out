const readline = require('readline');

function createPrompter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const pipedLines = [];
  let pipedIndex = 0;
  let isPiped = false;
  let pipedReady = false;
  let pipedResolve = null;

  if (!process.stdin.isTTY) {
    isPiped = true;
    rl.on('line', (line) => {
      pipedLines.push(line);
    });
    rl.on('close', () => {
      pipedReady = true;
      if (pipedResolve) pipedResolve();
    });
  }

  function close() {
    rl.close();
  }

  async function ask(question, options = {}) {
    const { defaultValue, required = true, validate } = options;

    if (isPiped) {
      await new Promise((resolve) => {
        if (pipedReady) resolve();
        else pipedResolve = resolve;
      });
    }

    while (true) {
      let prompt = `${question}: `;
      if (defaultValue !== undefined && defaultValue !== '') {
        prompt = `${question} (default: ${defaultValue}): `;
      }

      let value;
      if (isPiped) {
        const raw = pipedLines[pipedIndex++] || '';
        value = raw.trim() || defaultValue || '';
        // Echo the prompt and the answer so the output is coherent.
        process.stdout.write(`${prompt}${value || '(skipped)'}\n`);
      } else {
        value = await new Promise((resolve) => rl.question(prompt, resolve));
        value = value.trim() || defaultValue || '';
      }

      if (required && value === '') {
        console.log('  This field is required. Please enter a value.');
        continue;
      }
      if (validate && !validate(value)) {
        console.log('  Invalid input. Please try again.');
        continue;
      }
      return value;
    }
  }

  async function askNumber(question, options = {}) {
    const { min = -Infinity, max = Infinity, required = true } = options;
    return ask(question, {
      required,
      validate: (value) => {
        if (value === '' && !required) return true;
        const num = Number(value);
        if (Number.isNaN(num)) return false;
        return num >= min && num <= max;
      },
    }).then((value) => (value === '' ? undefined : Number(value)));
  }

  async function askChoice(question, choices) {
    console.log();
    choices.forEach((choice, index) => {
      console.log(`  ${index + 1}. ${choice}`);
    });
    const num = await askNumber(question, { min: 1, max: choices.length });
    return choices[num - 1];
  }

  return { ask, askNumber, askChoice, close };
}

function formatMarkdownHeading(text) {
  return `\n${text}\n${'='.repeat(text.length)}\n`;
}

function formatMarkdownSubheading(text) {
  return `\n${text}\n${'-'.repeat(text.length)}\n`;
}

function section(title) {
  return `\n## ${title}\n`;
}

function subsection(title) {
  return `\n### ${title}\n`;
}

function bullet(text) {
  return `- ${text}`;
}

module.exports = {
  createPrompter,
  formatMarkdownHeading,
  formatMarkdownSubheading,
  section,
  subsection,
  bullet,
};
