# Engineering Capstone Brief: Evergreen Insurance Quote (Phase 2)

> This brief describes the Phase 2 Evergreen Insurance Quote product an
> engineering team would deliver. You start from a running page *shell* and
> *expand* it into this product by assembling the provided pieces; you are
> **not** authoring the code, and the app is **not** pre-built. As Delivery
> Lead, read this first to understand the target, then lead and assemble toward
> it. Form opinions as you read: *what's the user value? what's risky? what
> would you cut?*

## The product

**Evergreen Insurance Quote** is a single-page React application that lets a
prospective customer see an estimated monthly insurance premium *as they type*,
on their phone, without creating an account.

A visitor picks a coverage type (auto / home / life), enters their age and a
coverage amount, and the estimated monthly premium updates live, no button
press needed. A **Recent quotes** panel shows what other customers are paying,
loaded from a data feed, and the visitor can save their own quote to the top of
that list. That's the whole job: a believable, live number in front of a
first-time shopper before they bounce to a competitor.

Phase 1 shipped this promise as a static page with a calculate button. Phase 2
rebuilds it the way the engineering organization builds real products: typed
TypeScript on a Vite toolchain, assembled from React components, with data
loaded from a feed and shared state managed through a custom hook and context.

## Who it's for

A first-time insurance shopper, often a new renter or new homeowner, who was
told they "need insurance" and wants a fast, no-commitment number on their
phone. They are not loyal to a carrier and will leave any site that asks for
twelve fields and an email before showing a price.

## What you'll assemble

The starter gives you a runnable page shell on a working Vite + TypeScript
toolchain. Over the week you expand it into the product below by dropping in
the provided pieces; you assemble them, you don't author them:

1. **Three React components**: `QuoteForm` (coverage type, age, coverage
   amount; the estimate updates as state changes), `PremiumDisplay` (shows the
   live estimate), and `RecentQuotes` (the list panel). They wire into marked
   slots in `App.tsx` and talk to each other through typed props.
2. **Shared TypeScript contracts**: `types.ts` defines `CoverageType` and
   `Quote`; `premium.ts` holds the typed rate model. The compiler enforces
   these contracts across every piece, including one known type bug the team
   shipped, which the compiler will catch before your eyes do.
3. **A data-loading piece**: the recent quotes come from a data feed
   (`public/quotes.json`, standing in for the quotes API) fetched with
   `useEffect`, with visible loading / error / success states.
4. **A custom hook and context provider**: `useQuoteEstimate` (the form's
   logic in a reusable home) and `QuotesContext` (the saved-quotes list shared
   without prop drilling). Dropping them in must not change what the customer
   sees (that is what a good refactor looks like), and it makes **Save this
   quote** work.
5. **A CI workflow** (`.github/workflows/ci.yml`): on every push, install from
   the lock file, run the TypeScript compiler, produce the production build.
6. **A production build**: `npm run build` emits the deployable `dist/`
   folder. What CI builds is what ships, not what your dev server shows.

## What is explicitly out of scope

- No real rate engine or actuarial pricing; the rate model is a placeholder.
- No customer accounts, saved-quote persistence, or email capture.
- No payment, checkout, or policy purchase.
- No back-end service; the JSON data feed *represents* the quotes API.
- No routing, no test suite, no deployment; Phase 2 stops at a green build.

## What "good" looks like

- `npm install` and `npm run dev` work first time from the committed lock file.
- The estimate updates live as the visitor types; auto, home, and life all
  return believable numbers under the sponsor's rate decision.
- Recent quotes load from the data feed with a visible loading state, and a
  saved quote appears at the top of the list instantly.
- `npm run type-check` and `npm run build` pass; the contracts hold.
- The work is on `main` via a reviewed pull request with a green CI run.

## Known risks to watch

- The placeholder rate values can produce numbers that look wrong if they
  aren't sanity-checked against the sponsor's decision.
- The dev server will happily run code the compiler rejects: a page that
  "works on my machine" can still fail the build.
- The data feed introduces loading and error states that have to be *visible*,
  not just handled.
- The toolchain versions are pinned; upgrading mid-week is a decision, not a
  reflex.

These are exactly the kinds of tradeoffs you will lead this week.
