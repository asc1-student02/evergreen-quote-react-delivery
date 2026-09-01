# Risk Register

| # | Risk | Owner | Likelihood | Impact | Mitigation | Trigger to escalate |
|---|---|---|---|---|---|---|
| 1 | Placeholder BASE_RATES produce absurd premium numbers that erode customer trust | Delivery Lead | M | H | Sanity-check all three coverage types in browser after every rate change; compare to real-world ballpark figures | Any premium below $10 or above $10,000/mo at default inputs |
| 2 | Dev server runs code the TypeScript compiler rejects — "works on my machine" masks a build failure | Delivery Lead | M | H | Run `npm run type-check` after every assembly step; never rely on the dev server alone as a quality gate |`npm run type-check` or `npm run build` fails on any push |
| 3 | Data feed (`quotes.json`) missing or malformed causes a blank Recent Quotes panel with no user feedback | Delivery Lead | L | H | Implement and verify all three states (loading, error, success) on Day 3; test error state by renaming the file | Customer-facing blank panel with no error message visible |
| 4 | CI workflow fails on first run due to environment or toolchain version mismatch | Delivery Lead | M | M | Use `npm ci` (not `npm install`) in workflow to ensure lock file fidelity; pin Node version in `ci.yml`| Red CI run on first push after workflow is enabled |
| 5 | Assembly step applied in wrong order causes type errors that are hard to trace | Delivery Lead | M | M | Follow kit README day-by-day sequence exactly; run 
`npm run type-check` after each step | More than one type error appearing after a single assembly step |
| 6 | Version upgraded mid-week breaks the build unexpectedly | Delivery Lead | L | H | Do not upgrade any dependency during the delivery week; treat 
`package-lock.json` as frozen | Any `npm audit` or Dependabot alert flagging a critical vulnerability |

## How I'll use this register

I re-read it at the start of each daily check-in and after each inject. If a risk fires, it moves to the top of that day's status update with its trigger named. The register lives in the repo so Friday's stakeholders can see what I was watching, not just what went wrong.
