import * as puppeteer from 'puppeteer'
import { promises as fs } from 'fs'
import { AFRelationship, PDFDocument, PDFName } from 'pdf-lib'
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

const CONTACT_LABELS = {
  en: ['Phone', 'Email', 'Location', 'Website'],
  fr: ['Téléphone', 'E-mail', 'Lieu', 'Site web'],
} as const;

async function postProcessPdf(path: string, languageCode: string, atsTextPath: string) {
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
  // Tell compliant readers to follow the structure tree (main-first DOM
  // order) instead of the 2-column paint order. Zero visual impact.
  // 2-column stays ATS-friendly via tags + linear txt attachment.
  for (const pdfPage of doc.getPages()) {
    pdfPage.node.set(PDFName.of('Tabs'), PDFName.of('S'));
  }
  const now = new Date();
  doc.setCreationDate(now);
  doc.setModificationDate(now);

  const keywords = ['resume', 'cv', 'lead developer', 'tech lead', meta.locality];
  embedXmp(doc, {
    title: meta.title,
    description: meta.description,
    creator: 'Vincent Marnier',
    subject: meta.description,
    keywords,
    language: meta.language,
    profile: 'PDF/X compatible metadata',
    pageCount: doc.getPageCount(),
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

  // Attach the linear plain-text resume (same content, DOM order) so
  // ATS / agents that read embedded files get a clean single-column
  // version without the 2-column paint-order scrambling. Zero visual impact.
  // afRelationship Alternative exposes it as a document-level Associated
  // File (PDF/A-3 style) so parsers see it as an alternate representation,
  // not just a hidden attachment. pdf-lib also adds Catalog /AF.
  try {
    const atsText = await fs.readFile(atsTextPath, 'utf-8');
    const fileName = atsTextPath.split('/').pop() ?? `resume.${languageCode}.txt`;
    await doc.attach(new TextEncoder().encode(atsText), fileName, {
      mimeType: 'text/plain; charset=utf-8',
      description: 'Plain-text version of the resume (linear reading order) for ATS and AI parsing',
      creationDate: now,
      modificationDate: now,
      afRelationship: AFRelationship.Alternative,
    });
    await fs.writeFile(path, await doc.save());
  } catch {
    // Attachment is a bonus — never fail the PDF build over it.
  }
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

    // Linear plain-text resume for machines: DOM order is main-first
    // (name → profile → experience → …) then sidebar, so innerText gives a
    // clean single-column reading order even though the PDF paint order
    // interleaves the two visual columns. Contact rows get explicit labels
    // (they are icon-only in the visual layout). The aboutMe block always
    // renders phone, email, location, website in that order.
    // Visual link text may be shortened (e.g. augmencia.com) to avoid split
    // annotations — expand https hrefs back to full URLs here so the txt
    // and its PDF attachment always carry the complete links. tel:/mailto:
    // rows keep their visible text (phone number, email).
    const labels = CONTACT_LABELS[languageCode as keyof typeof CONTACT_LABELS] ?? CONTACT_LABELS.en;
    const atsText = await page.evaluate((contactLabels: readonly string[]) => {
      // Read-only: never mutate the live DOM (setting textContent destroys
      // MUI Badge subtrees and leaks Emotion CSS into the PDF visual).
      // Collect short-display → full-href mapping, read innerText, then
      // string-replace. tel:/mailto: rows keep visible text.
      // NOTE: use innerText (not textContent) for the mapping — Emotion can
      // inject a <style> tag inside the first Badge, making textContent a
      // CSS dump while innerText stays clean.
      const links = Array.from(
        document.querySelectorAll('main a[href], section[aria-label] a[href]'),
      ).map((a) => ({
        text: ((a as HTMLElement).innerText ?? (a.textContent ?? '')).trim(),
        href: a.getAttribute('href') ?? '',
      })).filter((l) => /^https?:\/\//.test(l.href) && l.text.length > 0 && l.href !== l.text);
      const expand = (s: string) => {
        let out = s;
        for (const l of links) {
          if (l.href.endsWith(l.text) || l.href.includes(l.text)) out = out.split(l.text).join(l.href);
        }
        return out;
      };
      const mainText = expand(document.querySelector('main')?.innerText.trim() ?? '');
      const sidebar = document.querySelector('section[aria-label]') ?? document.querySelector('aside');
      const sideLines = ((sidebar as HTMLElement | null)?.innerText
        .split('\n')
        .map((l) => l.trimEnd())
        .filter((l) => l.trim().length > 0) ?? []).map(expand);
      const labelled = sideLines.map((line, i) =>
        i < contactLabels.length ? `${contactLabels[i]}: ${line}` : line,
      );
      return `${mainText}\n\n${labelled.join('\n')}\n`.replace(/\n{3,}/g, '\n\n');
    }, [...labels]);

    const atsTextPath = `resume.${languageCode}.txt`;
    await fs.writeFile(atsTextPath, atsText, 'utf-8');

    const path = `resume.${languageCode}.pdf`;
    await page.pdf({
      path,
      format: 'A4',
      printBackground: true,
      scale: 0.85,
      displayHeaderFooter: false,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      // Zero visual impact: only adds the tagged structure tree (screen
      // readers, modern ATS) and native bookmarks from the h1-h4 headings.
      tagged: true,
      outline: true,
    });

    await postProcessPdf(path, languageCode, atsTextPath);
  }

  await browser.close();
}

generatePDF();
