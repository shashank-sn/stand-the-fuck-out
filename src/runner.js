const fs = require('fs');
const path = require('path');
const { createPrompter } = require('./util');

async function runSkill(skill) {
  const prompter = createPrompter();
  try {
    console.log(`\n# ${skill.title}\n`);
    console.log(skill.description);
    console.log();

    const result = await skill.run(prompter);

    const output = typeof result === 'string' ? result : result.markdown;
    const metadata = typeof result === 'string' ? {} : result;

    console.log('\n---\n');
    console.log(output);

    const filename = `${skill.id}-${new Date().toISOString().split('T')[0]}.md`;
    const outPath = path.resolve(process.cwd(), filename);
    fs.writeFileSync(outPath, output, 'utf8');
    console.log(`\nSaved output to: ${outPath}`);

    return metadata;
  } finally {
    prompter.close();
  }
}

async function pickSkill(skills) {
  const prompter = createPrompter();
  try {
    console.log('Stand the F*ck Out — Brand Positioning CLI\n');
    console.log('Choose a skill:\n');
    skills.forEach((skill, index) => {
      console.log(`  ${index + 1}. ${skill.title}`);
      console.log(`     ${skill.shortDescription}`);
    });

    const choice = await prompter.askNumber('Enter number', { min: 1, max: skills.length });
    return skills[choice - 1];
  } finally {
    prompter.close();
  }
}

module.exports = { runSkill, pickSkill };
