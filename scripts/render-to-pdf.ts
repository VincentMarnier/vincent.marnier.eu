import * as puppeteer from 'puppeteer'
import { ALL_LANGUAGES_CODE } from "../src/app/[lang]/language";

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (req.url().includes('next-devtools')) {
        req.abort();
      } else {
        req.continue();
      }
    });

  for (const idx in ALL_LANGUAGES_CODE)
  {
    const languageCode = ALL_LANGUAGES_CODE[idx]

    // Open your locally running resume page
    await page.goto(`http://localhost:3000/${languageCode}`, {
      waitUntil: 'domcontentloaded',
    });

    await page.waitForSelector('body');

    await page.evaluate(async () => {
      await document.fonts.ready;
    });

    await page.emulateMediaType('screen');

    await page.pdf({
      path: `resume.${languageCode}.pdf`,
      format: 'A4',
      printBackground: true,
    });
  }

  await browser.close();
}

generatePDF();