# Risk Register

| # | Risk | Owner | Likelihood | Impact | Mitigation | Trigger to escalate |
|---|---|---|---|---|---|---|
| R1 | `npm install` fails or stalls on the VM and burns the Day-1 afternoon | Alex | L | H | Install from the committed lock file only (`npm install`, no ad-hoc `npm install <pkg>`); verified once during the environment check | Install still failing after 20 min → instructor, don't debug the registry myself |
| R2 | The dev server runs code the compiler rejects, so the demo "works" while the build is red | Alex | M | H | Run `npm run type-check` after every assembly step, not just before merge; treat the compiler as the gate, not the browser | Type-check red at 16:00 any day → hold the evening push, name it in the check-in |
| R3 | Sponsor rate values produce non-believable numbers after Tuesday's update | Alex + engineering | M | H | Spot-check three sample inputs (auto/home/life at defaults) right after editing `BASE_RATES`; record the values in the commit message | Any quote > $1,000/mo at default inputs → flag to sponsor before pushing |
| R4 | The quotes data feed fails silently and the panel shows nothing | Alex | M | M | The provided pieces render explicit loading / error states; verify all three states visibly render on Day 3 (dev-tools network throttle for loading) | Blank recent-quotes panel at any point → treat as an incident, not a cosmetic bug |
| R5 | Audit flag on the pinned toolchain becomes a blocker for merging | Priya (Sponsor) + platform team | M | M | Documented in Tuesday's status update: flag is in a dev-dependency, upgrade scheduled next week; ship decision confirmed with sponsor | Flag escalates to *high* severity, or sponsor reverses → stop merging, re-run go/no-go |

## How I'll use this register

I re-read it at the start of each daily check-in and after each inject. If a risk fires, it moves to the top of that day's status update with its trigger named. The register lives in the repo so Friday's stakeholders can see what I was watching, not just what went wrong.
