# Delivery Review: Evergreen Quote (React + TypeScript)

**Delivery Lead:** Angela Jeske  
**Phase 2 Capstone — 4-day delivery week**

## Slide 1: Delivery goal & did we hit it?

- **Goal:** By Thursday EOD, the Evergreen Insurance Quote React app fully
  assembled; typed components wired, live premium calculation working, recent
  quotes loading from the data feed (all three states visible), custom hook +
  context provider dropped in, merged to `main` from `delivery/lead` via a
  reviewed PR with a green CI run, clean type-check, and passing production build.
- **Hit?** ☒ **Yes — full required scope**, with one deliberate, documented
  deferral (the ZIP-code field, scheduled for a future round).

## Slide 2: What shipped

- A working quote experience: the premium updates live as you enter coverage
  details, recent quotes load from the data feed (with visible loading / error /
  success states), and the typed components, custom hook, and context provider
  are all wired in. **Save this quote** pins a quote to the top of the list.
- Under the hood, calculation lives in a custom hook (`useQuoteEstimate`) and the
  shared quote list lives in context (`QuotesContext`), that separation is what
  lets Save update the list instantly, and a state or context change is what
  triggers the re-render you see.
- **Merged to `main`** via reviewed PR from `delivery/lead`. CI on the merge
  commit: **green** (type-check clean, production build passing).
- What CI builds is what ships — the green run *is* the evidence.


## Slide 3: Three key decisions

- **Deferred the ZIP-code field (Inject #1).** In a typed codebase the quote's
  shape is a shared contract — one "small text box" touches the Quote type, the
  rate model, the form, the data feed, and the context provider. TypeScript made
  the true cost *visible before* committing: four files, one field, one CI run.
  That work belongs in a properly scoped round, not a Tuesday-afternoon add.
- **Shipped on the flagged toolchain despite the dependency-audit flag
  (Inject #1).** The flag was moderate severity and sat in a *development-time*
  dependency, not in what customers download. The upgrade was already scheduled
  for the platform team's next-week window. Holding a Thursday delivery for a
  planned, non-critical fix would have added more risk than it removed.
- **Logged and routed the leading-zero display bug — did not fix it.** During
  self-review I caught a cosmetic glitch in the Coverage amount field: typing
  rendered a stray leading zero (`0180000` instead of `180000`) that wouldn't
  clear, and the age field showed the same behavior when typed rather than
  toggled. Crucially, **the math was still correct** — `0180000` equals `180000`,
  so the premium was right ($2,340/mo for $180k home); a display defect, not a
  calculation error. **The call:** log it in the risk register and route it to
  engineering, not open `QuoteForm.tsx` and refactor it — that component is
  provided engineering work, outside my authorized edit scope. Assembly, not
  authoring.

## Slide 4: Risks & injects

- **Top risk tracked all week:** the Vite dev server could happily run code the
  compiler rejects — so the *compiler*, not the browser, was our real gate. Ran
  `npm run type-check` after every assembly step.
- **Inject #1 (Tue ~14:00):** two items from the sponsor — Marketing's ZIP-field
  ask + the dependency-audit flag. Re-prioritized the board, wrote the decision
  memo, sponsor confirmed both calls Wednesday.
- **Inject #2 (Wed):** support-reported wrong premium (~$3,120/mo for $180k home)
  + a **red type-check on `main`** after an engineering "adjust home rate" hotfix
  (`TS2322` — a rate entered as a string, not a number). I read the CI log, named
  the failure in plain English, and routed it to engineering with a specific ask
  — I did **not** open the code myself.
- **Go/no-go:** called **NO-GO** Wed 16:30 — my branch was green, but you don't
  merge into a red `main` that's under an open incident. My call named a specific,
  verifiable condition to flip it: a green CI run on `main`. **By Thursday `main`
  was green, so I proceeded to merge** — a real, evidence-driven decision, not an
  arbitrary one. Customer-quote root cause still under investigation, owned by
  engineering.

## Slide 5: What I'd do differently next round

- **Bake the rate spot-check into "done criteria."** Wednesday's incident was a
  rate change that shipped without anyone sanity-checking a sample premium. Next
  round, "spot-check a sample premium after any rate / `BASE_RATES` edit" becomes
  a written checkbox in the task's definition of done — not something living in
  one person's head.
- **Pull the dependency-audit report on Monday, not mid-week.** The audit flag
  arrived as a Tuesday surprise (Inject #1). Next round I'd ask the platform team
  for the audit report at the *start* of the week, so a known, scheduled issue is
  visible up front instead of interrupting delivery.
- **Oversaw AI use:** I had Copilot add two rows to the quotes data feed. It got
  the *shape* right; correct keys, numeric types, sensible IDs, supported
  coverage types,  but the *life* premium wrong ($342/mo vs. our ~$84), because it
  has no knowledge of our sponsor's `BASE_RATES`. Plausible but wrong, and
  type-check/CI would have passed it, since they verify a value is a *number*, not
  that it's *correct*. AI is fast; data correctness still needs human review.
- **Stay calm and diagnose (personal habit).** After the squash-merge, local
  `main` threw `vite: not found`. It looked alarming, but `git status` was clean —
  `node_modules` is git-ignored, so it doesn't travel between branches. A quick
  `npm install` fixed it. A scary tooling moment is usually just dependencies
  needing a reinstall, not lost work.

## Q&A prep

- *"The dev page worked all week — why does a red type-check matter?"* Because
  customers get the production build (`dist/`), not my dev server. The compiler
  was the thing standing between a broken rate and production.
- *"If you said NO-GO Wednesday, what flipped it to GO?"* The condition I named
  was met, main`'s type-check failure was fixed and CI went green. My branch was
  always green and never contained the broken hotfix, so I could merge onto a
  stable base.
- *"Why a custom hook *and* a context — what's the difference?"* Separation of
  concerns. The hook (`useQuoteEstimate`) holds the *calculation* logic — pure and
  reusable. The context (`QuotesContext`) holds the *shared data*  the quote list
  both the form and the list need. Splitting them means the calculation is
  independent of how the data is shared.
- *"How does RecentQuotes get its data?"* On mount, a `useEffect` fires a fetch to
  `/quotes.json`,  static file Vite serves from `public/`. In flight: Loading;
  on success: the five quotes render; on failure: an error message. Once context
  is wired, saved quotes get added on top of that loaded list.
- *"What does engineering most need to hear from this review?"* Put the safety
  checks in the process, not in people's heads — the Wednesday incident was
  exactly a check that lived in someone's head and got skipped.
