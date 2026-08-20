# Decision Memo: Defer the ZIP-Code Field to a Future Round

**Date:** Tue afternoon (after Inject #1)
**Author:** Alex Rivera
**Decision area:** This week's scope tradeoff

## Context

Marketing asked Tuesday at 14:00 for a ZIP-code field on the quote form by Thursday, to A/B test regional pricing; they say the pricing table is ready. It sounds like "one small text box." It isn't: in a typed codebase the quote's shape is a shared contract (`types.ts`), and every piece the engineering team handed us (the form, the premium model, the data feed, the saved-quotes context) is written against it. Change the contract and the compiler will, correctly, demand every layer be updated together.

## Options considered

1. **Add the field properly by Thursday.** Pros: marketing starts testing this week. Cons: touches `types.ts`, the rate model, the form component, the hook, the context, and the data feed; a cross-cutting change landing 36 hours before the delivery review, on top of Wednesday's planned data-loading and refactor work.
2. **Add a display-only ZIP box that feeds nothing.** Pros: fast, demo looks responsive to marketing. Cons: a field that silently ignores customer input is worse than no field; it would also fail the A/B test's purpose.
3. **Defer to a future round.** Pros: keeps the delivery goal intact; the change lands as one well-typed piece of work with room to verify. Cons: marketing waits one round.

## Recommendation

**Option 3.** Defer the ZIP-code field. Offer marketing a concrete slot: it is first on the roadmap for the next round, estimated as one to two days of engineering work *because* the type system makes the full blast radius visible up front.

## Why

The delivery goal is a demo without pre-apologizing. The typed contract doesn't make the field expensive; it makes the field's *true cost visible*, and that cost doesn't fit in the 36 hours we have without betting the week on it.

## What would change my mind

If marketing confirmed by Wednesday 11:00 that a *display-only* field with a "coming soon" label meets their test's needs (it measures interest, not pricing), I would reconsider option 2 with that label made explicit.
