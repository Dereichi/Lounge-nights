const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const outDir = path.resolve(__dirname, '..', 'screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  const url = 'http://localhost:5000';
  await page.goto(url, { waitUntil: 'networkidle' });

  // homepage full
  await page.screenshot({ path: path.join(outDir, 'homepage.png'), fullPage: true });

  // hero (capture h2 area)
  const heroHandle = await page.$('h2');
  if (heroHandle) {
    await heroHandle.screenshot({ path: path.join(outDir, 'hero-h2.png') });
  }

  // Trending Now section
  const trendingHeader = await page.$('text=Trending Now');
  if (trendingHeader) {
    const section = await trendingHeader.evaluateHandle(node => node.closest('section') || node.parentElement);
    if (section) {
      const box = await (await section.getProperty('outerHTML')).jsonValue();
      try {
        const el = await section.asElement();
        if (el) await el.screenshot({ path: path.join(outDir, 'trending.png') });
      } catch (e) {
        // fallback to viewport screenshot
      }
    }
  }

  await browser.close();
  console.log('screenshots saved to', outDir);
})();
