import * as puppeteer from 'puppeteer'
import { promises as fs } from 'fs'
import { PDFDocument } from 'pdf-lib'
import { ALL_LANGUAGES_CODE } from "../src/app/[lang]/language";
import { embedXmp } from "./pdf-postprocess";

const META = {
  en: {
    title: 'Vincent Marnier – Resume (EN)',
    description: "Vincent Marnier's resume",
    language: 'en-US',
    locality: 'Grenoble',
  },
  fr: {
    title: 'Vincent Marnier – CV (FR)',
    description: 'Vincent Marnier: CV',
    language: 'fr-FR',
    locality: 'Moirans',
  },
} as const;

async function postProcessPdf(path: string, languageCode: string) {
  const meta = META[languageCode as keyof typeof META] ?? META.en;
  const bytes = await fs.readFile(path);
  const doc = await PDFDocument.load(bytes);

  doc.setTitle(meta.title);
  doc.setAuthor('Vincent Marnier');
  doc.setSubject(meta.description);
  doc.setKeywords(['resume', 'cv', 'lead developer', 'tech lead', meta.locality]);
  doc.setProducer('vincent.marnier.eu resume pipeline');
  doc.setCreator('Chromium Skia/PDF via Puppeteer');
  doc.setLanguage(meta.language);
  const now = new Date();
  doc.setCreationDate(now);
  doc.setModificationDate(now);

  embedXmp(doc, {
    title: meta.title,
    description: meta.description,
    creator: 'Vincent Marnier',
    subject: meta.description,
    keywords: ['resume', 'cv', 'lead developer', 'tech lead'],
    language: meta.language,
    profile: 'PDF/X compatible metadata',
    personJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Vincent Marnier',
      jobTitle: 'Lead Developer / Tech Lead',
      url: 'https://vincent.marnier.eu',
      email: 'vincent@marnier.eu',
      telephone: '+33-7-86-35-09-26',
      address: {
        '@type': 'PostalAddress',
        addressLocality: meta.locality,
        addressCountry: 'FR',
      },
    },
  });

  const out = await doc.save();
  await fs.writeFile(path, out);
}

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

    // Set PDF metadata via document title and meta tags
    await page.evaluate((title) => {
      document.title = title;
    }, `Vincent Marnier – Resume (${languageCode.toUpperCase()})`);

    // Let entrance animations finish before capturing
    await new Promise((resolve) => setTimeout(resolve, 1200));

    await page.emulateMediaType('screen');

    const path = `resume.${languageCode}.pdf`;
    await page.pdf({
      path,
      format: 'A4',
      printBackground: true,
      scale: 0.85,
      displayHeaderFooter: false,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await postProcessPdf(path, languageCode);
  }

  await browser.close();
}

generatePDF();
