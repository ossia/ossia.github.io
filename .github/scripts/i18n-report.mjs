#!/usr/bin/env node
// Translations of the website (see _data/languages.yml):
// - errors (exit 1): a page in a language that is not in _data/languages.yml,
//   two pages with the same ref and language, a use case of _data/use_cases.yml
//   without an English page, a strings file for an unknown language;
// - report only: for each language, the pages not translated yet and the
//   interface strings missing from _data/i18n/<code>.yml (they fall back to English).
// Pages are translations of each other when they have the same `ref`.
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const readYaml = (file) => parse(fs.readFileSync(file, 'utf8'));
const languages = readYaml('_data/languages.yml').map((l) => l.code);
const useCases = readYaml('_data/use_cases.yml');
const errors = [];
const report = [];

// Front matter of the pages and posts
const pages = [];
for (const dir of ['.', '_pages', '_posts']) {
  for (const name of fs.readdirSync(dir)) {
    if (!/\.(md|html)$/.test(name)) continue;
    const file = path.join(dir, name);
    const m = fs.readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!m) continue;
    const fm = parse(m[1]) || {};
    pages.push({ file, lang: fm.lang || 'en', ref: fm.ref });
  }
}

for (const p of pages)
  if (!languages.includes(p.lang))
    errors.push(`${p.file}: lang "${p.lang}" is not in _data/languages.yml`);

const byRef = new Map();
for (const p of pages.filter((p) => p.ref)) {
  if (!byRef.has(p.ref)) byRef.set(p.ref, []);
  byRef.get(p.ref).push(p);
}
for (const [ref, list] of byRef)
  for (const code of languages) {
    const same = list.filter((p) => p.lang === code);
    if (same.length > 1)
      errors.push(
        `ref "${ref}" has ${same.length} pages in "${code}": ${same.map((p) => p.file).join(', ')}`
      );
  }
for (const uc of useCases)
  if (!(byRef.get(uc.key) || []).some((p) => p.lang === 'en'))
    errors.push(`_data/use_cases.yml: "${uc.key}" has no English page with ref: ${uc.key}`);

// Interface strings: every key of en.yml, as a.b.c paths
const keys = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' ? keys(v, `${prefix}${k}.`) : [`${prefix}${k}`]
  );
const english = keys(readYaml('_data/i18n/en.yml'));
for (const name of fs.readdirSync('_data/i18n')) {
  const code = name.replace(/\.yml$/, '');
  if (!languages.includes(code))
    errors.push(`_data/i18n/${name}: "${code}" is not in _data/languages.yml`);
}

for (const code of languages.filter((c) => c !== 'en')) {
  const file = `_data/i18n/${code}.yml`;
  const present = fs.existsSync(file) ? new Set(keys(readYaml(file) || {})) : new Set();
  const missingStrings = english.filter((k) => !present.has(k));
  const untranslated = [...byRef]
    .filter(([, list]) => list.some((p) => p.lang === 'en') && !list.some((p) => p.lang === code))
    .map(([ref]) => ref);
  const translated = [...byRef].filter(([, list]) => list.some((p) => p.lang === code)).length;
  report.push(`### ${code}`);
  report.push(
    `- ${translated} of ${translated + untranslated.length} translatable pages translated`
  );
  if (untranslated.length) report.push(`- not translated: ${untranslated.join(', ')}`);
  report.push(
    missingStrings.length
      ? `- ${missingStrings.length} of ${english.length} strings use the English text: ${missingStrings.join(', ')}`
      : `- all ${english.length} strings translated`
  );
}

const text = [
  '## Translations',
  '',
  ...report,
  ...(errors.length ? ['', '### Errors', ...errors.map((e) => `- ${e}`)] : [])
].join('\n');
console.log(text);
if (process.env.GITHUB_STEP_SUMMARY)
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, text + '\n');
process.exit(errors.length ? 1 : 0);
