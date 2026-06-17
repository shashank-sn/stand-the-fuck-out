const skills = require('./skills');
const { runSkill, pickSkill } = require('./runner');
const { createPrompter } = require('./util');

function showHelp() {
  console.log('Stand the F*ck Out — Brand Positioning CLI\n');
  console.log('Usage:');
  console.log('  npx stand-the-fuck-out [skill-id]');
  console.log('  npx stand-the-fuck-out --list');
  console.log('  npx stand-the-fuck-out --help\n');
  console.log('Available skills:');
  for (const skill of skills) {
    console.log(`  ${skill.id.padEnd(30)} ${skill.shortDescription}`);
  }
  console.log('\nExamples:');
  console.log('  npx stand-the-fuck-out brand-invisibility-audit');
  console.log('  npx stand-the-fuck-out ai-positioning-sprint');
}

function showList() {
  for (const [index, skill] of skills.entries()) {
    console.log(`${String(index + 1).padStart(2)}. ${skill.id}`);
    console.log(`    ${skill.title}`);
    console.log(`    ${skill.shortDescription}`);
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }

  if (args.includes('--list') || args.includes('-l')) {
    showList();
    return;
  }

  const firstArg = args.find((arg) => !arg.startsWith('-'));

  if (firstArg) {
    const skill = skills.find((s) => s.id === firstArg);
    if (!skill) {
      console.error(`Unknown skill: ${firstArg}`);
      showList();
      process.exitCode = 1;
      return;
    }
    await runSkill(skill);
    return;
  }

  const skill = await pickSkill(skills);
  await runSkill(skill);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
