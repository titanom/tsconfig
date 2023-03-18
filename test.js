// @ts-nocheck

const { execSync } = require('node:child_process');
const fs = require('node:fs');

const files = fs.readdirSync(__dirname).filter((filename) => filename.includes('tsconfig'));

for (const file of files) {
  console.log(`------ Running TypeScript compiler with file: ${file}. ------\n`);
  try {
    console.log(execSync(`pnpm tsc -p ${file}`).toString());
  } catch (error) {
    const stdout = error.stdout.toString();
    console.log(stdout);
  }
}
