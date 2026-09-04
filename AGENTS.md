# AGENTS.md

## Next.js version warning

This is NOT the Next.js you know. This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Project

Static personal resume site (Next.js 16, App Router, MUI v9, TypeScript). Deployed to GitHub Pages via `output: "export"`.

## Commands

- `npm run dev` — local dev server
- `npm run build` — static export to `/out` (runs typecheck via `prebuild`)
- `npm run lint` — ESLint (flat config)
- `npm run typecheck` — `tsc --noEmit`
- `npm run build-pdf` — generate PDFs via Puppeteer (requires `npm run dev` running first); writes `resume.en.pdf` and `resume.fr.pdf` to the repo root
- No test runner exists

## Architecture

- i18n via `[lang]` dynamic segment (`en`, `fr`) with `LanguageContext`
- Root `/` page auto-detects language via `navigator.languages` (client-only, no server redirect — static export) and shows a skeleton until resolved
- Root language detection uses `useSyncExternalStore`, **not** `useState`+`useEffect` — it satisfies the `react-hooks/set-state-in-effect` lint rule and the server snapshot (`null`) avoids hydration mismatch
- `src/app/[lang]/layout.tsx` `generateMetadata` must keep `metadataBase` as `https://vincent.marnier.eu` and use the `x-default` key (not `x-defaults`) for `alternates.languages` — don't regress either
- Data files (`src/data/en.tsx`, `src/data/fr.tsx`) are **JSX** — they embed MUI components directly, not plain JSON; both typed against `ResumeData` in `src/data/types.ts`
- The `location` field is **intentionally different per language** (EN = Grenoble for international/remote, FR = Moirans for local offers) — do not "fix"
- 6 reusable components in `src/app/[lang]/components/`: `Badge`, `Section`, `TimelineItem`, `LanguageSwitcher`, `JsonLd`, `Flags` (circle-flag SVGs — never emoji in text, see PDF section)
- Font is Noto Sans with **static** weights (`Noto_Sans({ weight: ['400','500','600','700'], ... })` in `layout_client.tsx`, family in `theme.ts`) — the default variable Inter broke space extraction in PDFs
- `page.tsx` keeps DOM order main-first with the sidebar placed via explicit grid columns (**no flex `order`**) — helps screen readers and HTML scrapers; see PDF caveat below
- Theme in `src/app/[lang]/theme.ts`
- Images unoptimized (required for static export)

## Resume content

- Job `description` fields in `src/data/en.tsx` and `src/data/fr.tsx` accept JSX (`ReactNode`) and use an **intro sentence + `<ul>` bullet list**, not plain strings. Keep the bullet style consistent across all entries.
- Descriptions use a concise, **nominal tone** — no "J'ai" / "I built" — consistently across all jobs and both languages.
- Only include content the candidate can substantiate: don't claim decisions they only contributed to, or results (e.g. commercialization, patent filings) that weren't theirs.

## PDF generation (Puppeteer)

- `scripts/render-to-pdf.ts` renders each locale via `page.emulateMediaType('screen')`, so `@media print` CSS does **not** apply. Any floating/overlay UI that should not appear in PDFs (e.g. the language switcher) must carry `class="hide-in-pdf"` for the script to hide it.
- Timeline `<img>` elements load eagerly (no `loading="lazy"`) on purpose — lazy images below the fold can fail to render in the Puppeteer PDF. The page is small, so eager loading is not a concern. Don't add `loading="lazy"`.
- PDF text-layer order follows **visual/paint order, not DOM order**: flex `order` and DOM reordering do NOT change the `pdftotext -raw` stream order while the sidebar stays visually on the left. Don't attempt DOM-only reading-order fixes.
- Never put `position: relative/absolute` on text containers to fake spacing — Skia emits positioned text **after** all static text (we once got all job titles emitted after all descriptions). Use explicit `{' '}` text nodes instead: flex `gap` emits no space in the text layer, so title↔dates and subtitle↔badge rows need a trailing `{' '}` inside the `Typography`.
- No emoji in resume text (it pulls in a `NotoColorEmoji` Type 3 font) — use the `Flags` SVG components.
- `scripts/render-to-pdf.ts` post-processes with `pdf-lib` (`scripts/pdf-postprocess.ts`): sets Title/Author/Subject/Keywords/Language + XMP, bumps PDF to 1.7 with compressed streams. Verify links with the pdf-lib annot script, not `strings` (streams are compressed).
- Typecheck covers `scripts/` too (`tsconfig.json` includes `**/*.ts`) — a broken script fails `prebuild`.
- **After each modification to resume content, verify the resume still fits within max 2 pages** (per language). Adjust font sizes, spacing, or trimmed descriptions if needed.
- **After each PDF-affecting change**: regenerate from the dev server via `npm run build-pdf`, then check (a) `pdfinfo` → 2 pages EN+FR, (b) `pdftotext -raw` contains `13+ years of experience`, `Schneider Electric`, `Lead Developer`, `Master's Degree`, `French: Native` and NOT `yearsof`/`SchneiderElectric`, (c) rasterize with `pdftoppm` and eyeball both pages.

## CI

Push to `main` triggers GitHub Actions — runs `next build`, deploys `/out` to GitHub Pages.
