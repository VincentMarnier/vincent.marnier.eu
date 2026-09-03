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
- 4 reusable components in `src/app/[lang]/components/`: `Badge`, `Section`, `TimelineItem`, `LanguageSwitcher`
- Theme in `src/app/[lang]/theme.ts`
- Images unoptimized (required for static export)

## PDF generation (Puppeteer)

- `scripts/render-to-pdf.ts` renders each locale via `page.emulateMediaType('screen')`, so `@media print` CSS does **not** apply. Any floating/overlay UI that should not appear in PDFs (e.g. the language switcher) must carry `class="hide-in-pdf"` for the script to hide it.
- Timeline `<img>` elements load eagerly (no `loading="lazy"`) on purpose — lazy images below the fold can fail to render in the Puppeteer PDF. The page is small, so eager loading is not a concern. Don't add `loading="lazy"`.

## CI

Push to `main` triggers GitHub Actions — runs `next build`, deploys `/out` to GitHub Pages.
