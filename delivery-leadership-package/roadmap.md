# Product Roadmap: Evergreen Insurance Quote

**Author:** Angela Jeske, Delivery Lead  
**Date:** Day 2 — Tuesday  
**Status:** Draft — stretch deliverable

---

## Where We Are: Phase 2 (This Week)
The foundation. A first-time insurance shopper can get a live estimated 
monthly premium on their phone in under a minute — no account, no form 
overload, no button press. The app is typed, data-loading, and assembled 
from React components on a Vite toolchain with a green CI run.

**Delivered this week:**
- Live premium calculator (auto, home, life)
- Recent quotes panel loaded from a data feed
- Save-a-quote to the top of the list via context
- TypeScript contracts enforced across every layer
- CI pipeline: type-check + production build on every push

**Explicitly out of scope this phase:**
- No real rate engine
- No accounts or persistence
- No backend
- No routing or test suite

---

## Round 3: Make It Real
*Target: 2–3 weeks after Phase 2*

The goal of Round 3 is to move from a demo to a believable product. 
A first-time shopper should feel like they are getting a real number, 
not a placeholder.

**Proposed scope:**
- **ZIP-code field** — regional pricing A/B test requested by Marketing. 
  Touches four files across the typed chain (type definition, rate model, 
  form component, data feed). Properly scoped now that Phase 2 contracts 
  are in place.
- **Real rate engine integration** — replace BASE_RATES placeholder with 
  a call to the actual pricing API. The typed contract means the swap is 
  surgical: one file, one change, compiler verifies every consumer.
- **Form validation** — age range limits, coverage amount min/max, 
  clear error messages before the customer sees an absurd number.
- **Unit test suite** — the TypeScript contracts make the boundaries 
  testable. Add tests for the premium calculation and the Quote type 
  contract as a CI step.

**Key risk:** ZIP-code field scope must be fully typed end-to-end. 
The compiler will catch every layer that is missed — that is a feature, 
not a problem. Budget time for all four files.

---

## Round 4: Persistence and Accounts
*Target: 4–6 weeks after Phase 2*

The goal of Round 4 is to give the shopper a reason to come back. 
A saved quote today is gone on refresh. Round 4 fixes that.

**Proposed scope:**
- **Quote persistence** — save quotes to a real backend (replaces the 
  in-memory context). The QuotesContext interface stays the same; 
  only the data layer changes.
- **Light account creation** — email + password only. No twelve-field 
  forms. The shopper saves their quote and gets a link back to it.
- **Quote comparison** — side-by-side view of up to three saved quotes 
  across coverage types.
- **Email follow-up** — 24-hour nudge with the saved quote and a 
  one-click "talk to an agent" CTA.

**Key risk:** Account creation introduces auth, which introduces 
security surface. Do not build auth in-house — use an identity provider 
(Auth0, Cognito, etc.) from day one.

---

## Round 5: Growth and Optimization
*Target: 8–12 weeks after Phase 2*

The goal of Round 5 is to turn a useful tool into a growth channel.

**Proposed scope:**
- **Regional pricing live** — ZIP-code A/B test results inform a real 
  regional rate table, replacing the placeholder.
- **Agent handoff flow** — a "talk to an agent" path that passes the 
  saved quote context directly to the CRM, no re-entry.
- **Analytics and funnel tracking** — where do shoppers drop off? 
  Which coverage type converts best? Instrument the key events.
- **Accessibility audit** — the form must work for shoppers using 
  screen readers and keyboard-only navigation. Not optional at scale.
- **Performance budget** — the page shell must load in under 2 seconds 
  on a mid-range phone on 4G. Set it as a CI gate.

**Key risk:** Analytics instrumentation must not leak PII. Review 
every tracked event against the data classification policy before 
enabling in production.

---

## What Would Change This Roadmap
- A Marketing-confirmed date for the regional pricing A/B test would 
  pull the ZIP-code field forward into Round 3 immediately.
- A critical (not moderate) dependency vulnerability would pause all 
  rounds until the platform team resolves it.
- Conversion data from Round 3 could reprioritize Round 4 entirely — 
  if shoppers are not saving quotes, persistence is not the right bet.