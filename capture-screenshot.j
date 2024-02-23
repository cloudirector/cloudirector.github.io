const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://your-website-url.com');  // Replace with your actual website URL
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
