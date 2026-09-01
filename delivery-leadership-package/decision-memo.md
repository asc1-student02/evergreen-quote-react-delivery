# Decision Memo: Defer the ZIP-Code Field to a Future Round

**Date:** Day 2 — Tuesday  
**Author:** Angela Jeske, Delivery Lead  

---

## Decision 1: Optional Component Challenge vs. Staying on Required Assembly
*(Made ~11:00, before the afternoon inject)*

### Context
After completing the required Day 2 assembly steps — copying the three 
components into src/components/, wiring imports and JSX into App.tsx, 
setting the product title in .env, applying the sponsor's BASE_RATES 
(auto: $85, home: $130, life: $65), and fixing the QA-flagged type bug 
with a clean npm run type-check — the team had a choice: move directly 
to the afternoon leadership block or attempt the optional heading prop 
challenge on RecentQuotes.

### Options Considered

**Option A: Skip the optional challenge, move to afternoon block early**
Lower time risk. More buffer before the inject. No new files touched 
after a clean type-check.

**Option B: Complete the optional challenge immediately after assembly**
Attempt the heading prop change while the assembly context is fresh. 
The TypeScript compiler bounds the risk — any error is named immediately 
at the exact file and line. Builds direct hands-on experience with typed 
props before Day 3's data loading work.

### Recommendation: Option B — attempt the challenge immediately.

### Why
The compiler acts as a safety net with a bounded, recoverable cost. The 
benefit — experience with typed React props — pays off directly on Day 3 
when the same pattern applies to the data feed and context provider. 
Waiting until after the inject risked losing the context entirely if the 
inject consumed the afternoon.

---

## Decision 2: ZIP-Code Field Request and Dependency Audit Flag
*(Made ~14:00, in response to inject from project sponsor)*

### Context
At 14:00 two items arrived from the project sponsor. Marketing requested 
a ZIP-code field on the quote form by Thursday for a regional-pricing A/B 
test. The platform team flagged a moderate-severity vulnerability in a 
development-time build dependency, with the upgrade scheduled for next 
week's normal window. The delivery goal remained unchanged: assembled, 
typed, data-loading app merged to main with a green CI run by Thursday EOD.

---

### Decision 2a: ZIP-Code Field

**Options Considered**

**Option A: Add the ZIP-code field this week**
Adding one field touches every layer of the typed chain: the Quote type 
definition, the rate model, the QuoteForm component, the data feed, and 
the context provider. The TypeScript compiler makes the full cost visible 
and knowable — it will fail at every layer that is not updated. Doing 
this right displaces at minimum the hook/context assembly or CI 
enablement, both required deliverables.

**Option B: Decline this week, schedule for next round**
Protect the committed delivery goal. Document the ZIP-code field as a 
next-round item with a clear cost estimate so Marketing understands what 
"just adding the box" actually involves.

**Recommendation: Option B — do not add the ZIP-code field this week.**

**Why**
The delivery goal is the contract with the sponsor. The TypeScript 
compiler gives an honest, visible cost estimate: four files, one field, 
one CI run to verify. That work belongs in a planned round with proper 
scope, not as a Tuesday afternoon addition. Marketing's A/B test timeline 
should be set against a properly scoped delivery.

---

### Decision 2b: Ship or Hold on the Dependency Audit Flag

**Options Considered**

**Option A: Hold — wait for next week's upgrade window**
Delays delivery by at least one week. The flag is moderate severity, 
not critical, and is in a development-time dependency — it is not 
present in what customers download or run.

**Option B: Ship this week on the flagged toolchain**
The platform team confirmed the flag is in a dev dependency only. The 
upgrade is already scheduled for next week's normal window. Holding 
delivery for a planned, non-critical upgrade introduces more risk than 
it removes.

**Recommendation: Option B — ship this week.**

**Why**
A moderate-severity flag in a development-time dependency does not 
affect the customer-facing build artifact. The platform team owns the 
upgrade and it is already on their calendar. Holding a Thursday delivery 
for a scheduled next-week fix is not a proportionate response. We 
document it in the risk register, note it in Wednesday's go/no-go, and 
hand it off cleanly to the platform team.