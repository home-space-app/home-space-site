// Renders the social preview image and the Apple touch icon into src/.
// Usage: node tools/render-og.js   (needs Playwright with Chromium)
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: 'dark' });
  await page.goto('file://' + path.join(__dirname, 'og-image.html'));
  await page.screenshot({ path: path.join(__dirname, '../src/og-image.png') });

  // 180x180 touch icon: the light favicon on a solid tile (iOS adds its own rounding).
  await page.emulateMedia({ colorScheme: 'light' });
  await page.setViewportSize({ width: 180, height: 180 });
  await page.setContent(`<style>html,body{margin:0;background:#2563eb}img{display:block;width:180px;height:180px}</style>
    <img src="file://${path.join(__dirname, '../src/favicon.svg')}">`);
  await page.waitForLoadState('load');
  await page.screenshot({ path: path.join(__dirname, '../src/apple-touch-icon.png') });
  await browser.close();
})();
