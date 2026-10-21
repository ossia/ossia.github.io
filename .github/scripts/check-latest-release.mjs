#!/usr/bin/env node
// Is the website on the latest releases? Compares score_version and
// libossia_version in _config.yml with the latest GitHub releases of
// ossia/score and ossia/libossia. Exits 1 when the site is behind.
// Uses GITHUB_TOKEN when set (higher API rate limit).
import fs from 'node:fs';

const config = fs.readFileSync('_config.yml', 'utf8');
const configured = (key) => (config.match(new RegExp(`^${key}:\\s*"?([^"\\s]+)"?`, 'm')) || [])[1];

async function latest(repo) {
  const headers = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, { headers });
  if (!res.ok) throw new Error(`${repo}: GitHub API answered ${res.status}`);
  return (await res.json()).tag_name.replace(/^v/, '');
}

const checks = [
  { key: 'score_version', repo: 'ossia/score' },
  { key: 'libossia_version', repo: 'ossia/libossia' }
];
let behind = 0;
for (const { key, repo } of checks) {
  const site = configured(key);
  const release = await latest(repo);
  const ok = site === release;
  if (!ok) behind++;
  console.log(
    `${ok ? 'OK  ' : 'BEHIND'} ${repo}: latest release ${release}, _config.yml ${key} ${site}`
  );
}
process.exit(behind ? 1 : 0);
