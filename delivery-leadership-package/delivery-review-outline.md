# Delivery Review: Evergreen Quote (React + TypeScript)

**Delivery Lead:** Angela Jeske  
**Phase 2 Capstone — 4-day delivery week**

## Slide 1: Delivery goal & did we hit it?

- **Goal:** By Thursday EOD, the Evergreen Insurance Quote React app fully
  assembled — typed components wired, live premium calculation working, recent
  quotes loading from the data feed (all three states visible), custom hook +
  context provider dropped in — merged to `main` from `delivery/lead` via a
  reviewed PR with a green CI run, clean type-check, and passing production build.
- **Hit?** ☒ **Yes — full required scope**, with one deliberate, documented
  deferral (the ZIP-code field, scheduled for a future round).

## Slide 2: What shipped

- A working quote experience: the premium updates live as you enter coverage
  details, recent quotes load from the data feed (with visible loading / error /
  success states), and the typed components, custom hook, and context provider
  are all wired in. **Save this quote** pins a quote to the top of the list.
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
  dependency — not in what customers download. The upgrade was already scheduled
  for the platform team's next-week window. Holding a Thursday delivery for a
  planned, non-critical fix would have added more risk than it removed.
- **Logged and routed the leading-zero display bug — did not fix it.** During
  self-review I caught a cosmetic glitch in the Coverage amount field: typing
  rendered a stray leading zero (`0180000` instead of `180000`) that wouldn't
  clear, and the age field showed the same behavior when typed rather than
  toggled. Crucially, **the math was still correct** — `0180000` equals
  `180000`, so the premium was right ($2,340/mo for $180k home); a display
  defect, not a calculation error. **The call:** log it in the risk register and
  route it to engineering, not open `QuoteForm.tsx` and refactor it — that
  component is provided engineering work, outside my authorized edit scope.
  Assembly, not authoring.

## Slide 4: Risks & injects

- **Top risk tracked all week:** the Vite dev server happily runs code the
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
  merge into a red `main` that's under an open incident. Flipped to **GO** once
  `main` was fixed and CI went green; merged. Customer-quote root cause still
  under investigation, owned by engineering.

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
