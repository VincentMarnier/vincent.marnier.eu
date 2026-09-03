import * as puppeteer from 'puppeteer'
import { ALL_LANGUAGES_CODE } from "../src/app/[lang]/language";

async function generatePDF() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
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
      await Promise.all(
        Array.from(document.images).map(
          (img) => img.decode ? img.decode() : img.complete,
        ),
      );

      document.querySelectorAll('.hide-in-pdf').forEach((el) => {
        (el as HTMLElement).style.display = 'none';
      });
    });

    // Let entrance animations finish before capturing
    await new Promise((resolve) => setTimeout(resolve, 1200));

    await page.emulateMediaType('screen');

    await page.pdf({
      path: `resume.${languageCode}.pdf`,
      format: 'A4',
      printBackground: true,
      scale: 0.85,
    });
  }

  await browser.close();
}

generatePDF();