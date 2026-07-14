import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const registry = JSON.parse(fs.readFileSync(path.join(root, 'src/metadata/component-registry.json'), 'utf8'));
const failures = [];

for (const component of registry.components) {
  if (component.status === 'implemented' || component.status === 'deprecated-code-only') {
    for (const field of ['source', 'docs']) {
      const value = component[field];
      if (!value || !fs.existsSync(path.join(root, value))) {
        failures.push(`${component.name}: missing ${field} at ${value}`);
      }
    }
  }
}

const storybook = JSON.parse(fs.readFileSync(path.join(root, 'storybook-static/index.json'), 'utf8'));
const storyTitles = Object.values(storybook.entries).map((entry) => entry.title);
for (const component of registry.components.filter((item) => item.status === 'implemented')) {
  if (!storyTitles.some((title) => title.endsWith(`/${component.name}`))) {
    failures.push(`${component.name}: missing Storybook entry`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Audit fixtures valid for ${registry.components.length} registered components.`);
