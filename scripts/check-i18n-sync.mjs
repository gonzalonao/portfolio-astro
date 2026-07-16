#!/usr/bin/env node
// EN/ES content mirror check: every entry must have a same-named twin with the
// same top-level frontmatter keys. Exit 0 = in sync, 1 = findings.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const PAIRS = [
  ['src/content/projects', 'src/content/projectsEs'],
  ['src/content/writing', 'src/content/writingEs'],
];

const isEntry = (f) => f.endsWith('.mdx') || f.endsWith('.md');

function frontmatterKeys(path) {
  const text = readFileSync(path, 'utf8');
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  return match[1]
    .split(/\r?\n/)
    .filter((line) => /^[A-Za-z0-9_-]+\s*:/.test(line))
    .map((line) => line.slice(0, line.indexOf(':')).trim());
}

let findings = 0;
const flag = (msg) => {
  console.log(`  ${msg}`);
  findings += 1;
};

for (const [enDir, esDir] of PAIRS) {
  console.log(`${enDir}  <->  ${esDir}`);
  const enFiles = new Set(readdirSync(enDir).filter(isEntry));
  const esFiles = new Set(readdirSync(esDir).filter(isEntry));

  for (const f of enFiles) if (!esFiles.has(f)) flag(`missing ES twin: ${esDir}/${f}`);
  for (const f of esFiles) if (!enFiles.has(f)) flag(`missing EN twin: ${enDir}/${f}`);

  for (const f of [...enFiles].filter((f) => esFiles.has(f)).sort()) {
    const en = frontmatterKeys(join(enDir, f));
    const es = frontmatterKeys(join(esDir, f));
    if (!en) flag(`no frontmatter block: ${enDir}/${f}`);
    if (!es) flag(`no frontmatter block: ${esDir}/${f}`);
    if (!en || !es) continue;
    const enOnly = en.filter((k) => !es.includes(k));
    const esOnly = es.filter((k) => !en.includes(k));
    if (enOnly.length || esOnly.length) {
      flag(
        `frontmatter drift in ${f}: EN-only [${enOnly.join(', ')}] ES-only [${esOnly.join(', ')}]`,
      );
    }
  }
}

console.log(findings === 0 ? '\ni18n mirrors in sync' : `\n${findings} finding(s)`);
process.exit(findings === 0 ? 0 : 1);
