const puppeteer = require('puppeteer');
const fs = require('fs');
const axios = require('axios');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cloudirector.github.io');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();

  const imageBuffer = fs.readFileSync('screenshot.png');

  const response = await axios.post('https://freeimage.host/api/1/upload', {
    source: 'file',
    file: imageBuffer.toString('base64'),
    format: 'json',
  });

  const imageUrl = response.data.file.url;
  console.log(`Screenshot uploaded to: ${imageUrl}`);
})();
