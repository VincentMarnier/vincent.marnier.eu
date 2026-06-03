import * as puppeteer from 'puppeteer'
import { ALL_LANGUAGES_CODE } from "../src/app/[lang]/language";

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const idx in ALL_LANGUAGES_CODE)
  {
    const languageCode = ALL_LANGUAGES_CODE[idx]
    // Open your locally running resume page
    await page.goto(`http://localhost:3000/${languageCode}`, {
      waitUntil: 'networkidle0',
    });

    await page.pdf({
      path: `resume.${languageCode}.pdf`,
      format: 'A4',
      printBackground: true,
    });
  }

  await browser.close();
}

generatePDF();