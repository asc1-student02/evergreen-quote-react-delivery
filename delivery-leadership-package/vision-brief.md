# Vision Brief: Evergreen Insurance Quote — Phase 2

## Who is the customer?
A first-time insurance shopper, often a new renter or homeowner who wants
a fast, no-commitment monthly premium estimate on their phone. They are not
loyal to any carrier and will leave any site that asks for too much before
showing a price.

## What pain does Evergreen Quote remove?
Today's insurance quoting experience requires creating an account, filling out
excessive fields, and waiting before seeing any number. Evergreen Quote removes
that friction entirely: the visitor picks a coverage type, enters their age
and coverage amount, and sees a live estimate update as they type — no button
press, no account, no commitment.

## What does "good" look like at end of the week?
- `npm install` and `npm run dev` work first time from the committed lock file
- The estimated premium updates live as the visitor types (auto, home, life)
- Recent quotes load from the data feed with visible loading and error states
- A visitor can save their quote and see it appear at the top of the list instantly
- `npm run type-check` and `npm run build` both pass clean
- The assembled app is merged to `main` via a reviewed PR with a green CI run

## What are we explicitly NOT doing this week?
- No real rate engine or actuarial pricing
- No customer accounts, login, or email capture
- No payment, checkout, or policy purchase
- No real backend — the JSON file stands in for the quotes API
- No routing, no test suite, no deployment beyond a green build
- No authoring code from scratch — assembly only

## GitHub Project Board
https://github.com/users/asc1-student02/projects/2