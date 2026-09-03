# vincent.marnier.eu

Personal resume website for Vincent Marnier, built with Next.js and Material UI. Renders a two-column resume layout with sidebar and main content area, available in English and French.

**Live site:** [vincent.marnier.eu](https://vincent.marnier.eu)

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- [Material UI v9](https://mui.com)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Languages

The site is available in English and French. Visiting the root `/` auto-detects the visitor's browser language (`navigator.languages`) and shows a brief skeleton before rendering in the best match. A floating **EN | FR** switcher (top-right) lets anyone change language, linking to the canonical routes `/en` and `/fr`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Static export to `out/` (runs typecheck) |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run build-pdf` | Generate PDF resumes (requires `dev` server running) |

## PDF generation

```bash
npm run dev        # in a separate terminal
npm run build-pdf  # writes resume.en.pdf and resume.fr.pdf to the repo root
```

The floating **EN | FR** switcher is hidden in the generated PDFs.

## Deployment

The site is a static export (`output: "export"`). Pushing to `main` triggers a GitHub Actions workflow that runs `next build` and deploys `out/` to GitHub Pages, making changes live at [vincent.marnier.eu](https://vincent.marnier.eu).

## License

Private.
