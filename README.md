# Evergreen Insurance Quote: Engineering Starter (Phase 2)

This is the **engineering team's starter project** for the Phase 2 Evergreen
Insurance Quote product: a React + TypeScript app built with Vite. It is the
baseline you, as Delivery Lead, will oversee and *assemble* into a finished app
this week; you will not author it from scratch.

It runs as-is: the page shell (header, hero, footer, and a placeholder where
the quote form belongs) loads in the browser today, on Day 1, so you have
something working to lead from. Over the week you assemble the provided pieces
from your lab kit into the marked slots.

## What's here

| File / folder | What it is |
|---|---|
| `src/App.tsx` | The page shell, with `INSERT` markers where the provided components get wired in on Day 2. |
| `src/main.tsx` | The app entry point. Provided; you don't touch it. |
| `src/types.ts` | The shared TypeScript types (`CoverageType`, `Quote`): the contracts every provided piece is written against. |
| `src/premium.ts` | The typed premium calculation. You update the `BASE_RATES` **values** (Day 2, sponsor decision), never the function. |
| `src/sampleQuotes.ts` | Typed sample data used on Day 2, replaced by the live data feed on Day 3. |
| `src/index.css` | The Evergreen theme. Provided; you don't touch it. |
| `.env` | The product title, configured through an environment variable. You set the real value on Day 2. |
| `package.json` / `package-lock.json` | The team's pinned dependencies and npm scripts (`dev`, `type-check`, `build`, `preview`). |
| `index.html`, `vite.config.ts`, `tsconfig*.json` | The Vite + TypeScript toolchain configuration. Provided. |
| `CAPSTONE-BRIEF.md` | The brief the engineering team worked from. Read it first. |

## How to run it

```bash
npm install     # install the pinned dependencies from the lock file
npm run dev     # start the Vite dev server
```

Then Ctrl+Click the URL Vite prints (usually `http://localhost:5173`). The
Evergreen page shell loads, with a placeholder where the quote form belongs,
and a `CHANGEME` product title in the browser tab. Both are yours to deal with
this week.

Other scripts you will use during the week:

```bash
npm run type-check   # ask the TypeScript compiler to check the contracts
npm run build        # type-check + produce the production build in dist/
npm run preview      # serve the production build locally
```

## How this becomes the finished app

You assemble onto this project using the provided pieces in your lab kit
(`~/LabFiles/wa3859-cap-phase-2-capstone-project-leaders/`):

- **Day 2**: drop in the provided components (`components/`), paste the
  imports and JSX at the `INSERT` markers, set the product title in `.env`,
  apply the sponsor's rate values, and fix the one known type error with the
  kit's one-line fix.
- **Day 3**: switch the recent-quotes list to the provided data-loading piece
  (`data-loading/` + `data/quotes.json`), then drop in the provided custom
  hook and context provider (`hooks-context/`); enable the CI workflow from
  `workflows/`.
- **Day 4**: run the production build, open a pull request, review, and merge
  to `main`.

You are leading and assembling, not writing application code.
