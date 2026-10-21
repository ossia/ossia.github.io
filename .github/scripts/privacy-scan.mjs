#!/usr/bin/env node
// Privacy check for the built site: the privacy policy promises that nothing is
// loaded from, or sent to, a third party before the visitor accepts the cookie
// banner, and that no cookie is set. That promise is only as good as the last
// embed someone added, so every page is opened in a real browser:
//
//   1. as a new visitor: no request may leave the site, and no cookie may be set;
//   2. after "Accept all" (a few pages): only the Google Analytics hosts may be contacted;
//   3. with Global Privacy Control: no banner, and nothing leaves the site.
//
// External requests are recorded, then aborted, so the result does not depend on
// the network. Usage: node .github/scripts/privacy-scan.mjs <built site dir>
import { chromium } from 'playwright';
import { serve, pages, pool } from './lib/site.mjs';

const root = process.argv[2] || '_site';
// Contacted only after consent, by gtag.js (see _includes/consent-head.js)
const ANALYTICS_HOSTS = [/(^|\.)googletagmanager\.com$/, /(^|\.)google-analytics\.com$/];
// Pages where the "Accept all" path is tested
const ACCEPT_PAGES = ['/', '/score/download.html', '/fr/usages.html'];

const isLocal = (u) => {
  if (!/^https?:/.test(u)) return true; // data:, blob:, about:
  const h = new URL(u).hostname;
  return h === '127.0.0.1' || h === 'localhost';
};

async function visit(browser, url, { gpc = false, accept = false } = {}) {
  const context = await browser.newContext();
  if (gpc) {
    await context.addInitScript(() =>
      Object.defineProperty(navigator, 'globalPrivacyControl', { get: () => true })
    );
  }
  const page = await context.newPage();
  const before = new Set();
  const after = new Set();
  let accepted = false;
  await page.route('**/*', (route) => {
    const u = route.request().url();
    if (isLocal(u)) return route.continue();
    (accepted ? after : before).add(new URL(u).hostname);
    return route.abort();
  });
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  // Lazy content (images, players behind facades) appears on scroll
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
  });
  await page.waitForTimeout(500);
  const banner = await page.locator('.consent-banner').count();
  const cookies = (await context.cookies()).map((c) => c.name);
  if (accept && banner) {
    accepted = true;
    await page.getByRole('button', { name: /Accept all|Tout accepter/ }).click();
    await page.waitForTimeout(1500);
  }
  await context.close();
  return { before: [...before], after: [...after], cookies, banner };
}

const site = await serve(root);
const browser = await chromium.launch();
const list = pages(root);
const problems = [];

await pool(list, 4, async (p) => {
  const r = await visit(browser, site.url + p);
  if (r.before.length) problems.push(`${p}: contacts ${r.before.join(', ')} before consent`);
  if (r.cookies.length) problems.push(`${p}: sets cookies ${r.cookies.join(', ')} before consent`);
  if (!r.banner) problems.push(`${p}: no cookie banner for a new visitor`);
});

for (const p of ACCEPT_PAGES) {
  const r = await visit(browser, site.url + p, { accept: true });
  const unexpected = r.after.filter((h) => !ANALYTICS_HOSTS.some((re) => re.test(h)));
  if (unexpected.length) problems.push(`${p}: after consent, contacts ${unexpected.join(', ')}`);
  if (!r.after.length) problems.push(`${p}: "Accept all" did not load Google Analytics`);
}

for (const p of ACCEPT_PAGES) {
  const r = await visit(browser, site.url + p, { gpc: true });
  if (r.banner) problems.push(`${p}: banner shown although Global Privacy Control is on`);
  if (r.before.length)
    problems.push(`${p}: contacts ${r.before.join(', ')} with Global Privacy Control`);
}

await browser.close();
site.close();

console.log(`Privacy scan: ${list.length} pages, ${problems.length} problem(s)`);
for (const m of problems.sort()) console.log('  - ' + m);
process.exit(problems.length ? 1 : 0);
