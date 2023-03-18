// @ts-nocheck

const { execSync } = require('node:child_process');
const fs = require('node:fs');

const files = fs.readdirSync(__dirname).filter((filename) => filename.includes('tsconfig'));

let failed = 0;

for (const file of files) {
  console.log(`------ Running TypeScript compiler with file: ${file}. ------\n`);
  try {
    console.log(execSync(`pnpm tsc -p ${file}`).toString());
  } catch (error) {
    failed++;
    const stdout = error.stdout.toString();
    console.log(stdout);
  }
}

if (failed) process.exit(1);
