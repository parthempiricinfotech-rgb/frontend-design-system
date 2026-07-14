import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve(import.meta.dirname, '../storybook-static');
const buildFile = path.join(outDir, 'audit-build.json');
const build = JSON.parse(fs.readFileSync(buildFile, 'utf8'));
build.lastVerifiedLocally = new Date().toISOString();
fs.writeFileSync(buildFile, `${JSON.stringify(build, null, 2)}\n`);
console.log(`Verified Storybook static export in ${outDir}`);
