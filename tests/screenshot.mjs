// 渲染 tests/fixture.html 的浅色 / 暗色截图，并做关键样式断言
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
mkdirSync(`${here}out`, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 960, height: 900 } });
await page.goto(`file://${here}fixture.html`);

let failed = false;
const expect = (ok, msg) => { if (!ok) { failed = true; console.error('FAIL', msg); } };

for (const mode of ['theme-light', 'theme-dark']) {
  await page.evaluate((m) => (document.body.className = m), mode);
  await page.waitForTimeout(300);
  const s = await page.evaluate(() => {
    const cs = (sel) => getComputedStyle(document.querySelector(sel));
    return {
      body: cs('p').fontSize,
      done: cs('li[data-task="x"]').textDecorationLine,
      cancelled: cs('li[data-task="-"]').textDecorationLine,
      importantIcon: getComputedStyle(document.querySelector('li[data-task="!"] input'), '::after').webkitMaskImage,
    };
  });
  expect(s.body === '16px', `${mode} body font-size ${s.body}`);
  expect(s.done.includes('line-through'), `${mode} done task not struck`);
  expect(s.cancelled.includes('line-through'), `${mode} cancelled task not struck`);
  expect(s.importantIcon.startsWith('url('), `${mode} [!] icon missing`);
  await page.screenshot({ path: `${here}out/${mode}.png`, fullPage: true });
}

await browser.close();
if (failed) process.exit(1);
console.log('screenshots written to tests/out/');
