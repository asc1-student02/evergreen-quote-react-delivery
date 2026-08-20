# Delivery Review: Evergreen Quote

## Slide 1: Delivery goal & did we hit it?

- **Goal:** "Assembled Evergreen Quote React app (typed, live-updating, data-loading, hook/context wired) on `main` via a reviewed PR with a green CI run."
- **Hit?** ☒ Yes, full scope, one deliberate deferral (ZIP-code field, next round).

## Slide 2: What shipped

- Demo: estimate moves as I type; recent quotes load from the feed; **Save this quote** pins my quote to the top. (Screenshot inline.)
- Merged PR: #9 · CI run on the merge commit: green; link in slide notes.
- `npm run build` artifact (`dist/`) produced by CI; what CI builds is what ships.

## Slide 3: Two key decisions

- **Deferred the ZIP-code field.** Why: in a typed codebase the quote's shape is a shared contract; the "small text box" touches every layer, and its true cost didn't fit the 36 hours left. The type system didn't make it expensive; it made the cost *visible before* we committed.
- **Shipped on the pinned toolchain despite the audit flag.** Why: the flag sits in a development dependency, not in what customers download; an unscheduled mid-week upgrade was the riskier move. Upgrade lands in the platform team's window next week.

## Slide 4: Risks & injects

- **Top risk tracked:** the dev server happily runs code the compiler rejects, so the compiler, not the browser, was our gate all week (`npm run type-check` after every assembly step).
- **Inject #1 (Tue):** marketing's ZIP-field ask + the audit flag. Re-prioritized, decision memo on file, sponsor confirmed both calls Wednesday morning.
- **Inject #2 (Wed):** support-reported absurd premium + red type-check on `main` after an engineering hotfix. Read the CI log, named the failure in plain English, routed it to the team with a specific ask; did not open the code myself. Go call made *from* my branch's green CI; condition set on `main` being fixed by Thursday 09:30 (it was).

## Slide 5: What I'd do differently next round

- Put "spot-check rates after any `BASE_RATES` edit" in the task's done criteria, not in my head; Wednesday's incident was that check, skipped by someone else.
- Ask the platform team for the dependency-audit report Monday, not when a flag interrupts the week.

## Q&A prep

- *"The dev page worked all week; why does a red type-check matter?"* Because customers get the build, not my dev server. The compiler was the only thing standing between that hotfix and production.
- *"What's the one thing engineering needs to hear from this review?"* The hooks/context refactor changed nothing the customer sees, on purpose; that's what made it safe to merge. Behavior-preserving refactors should keep being the standard.
