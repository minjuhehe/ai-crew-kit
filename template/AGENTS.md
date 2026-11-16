# {{PROJECT_NAME}} — Shared Project Memory

> **Every AI on this project reads this file before starting work, and updates the "Status" section before finishing.**
> The owner is not a programmer. Explain results in plain words — what users will see — not how the code works.
> Keep this file short (under ~200 lines). Move old status notes to `docs/HANDOFF.md`.

## What we are building
{{ONE_PARAGRAPH_DESCRIPTION}}

## Pillars (never cut or change without the owner)
1. {{PILLAR_1}}
2. {{PILLAR_2}}
3. {{PILLAR_3}}

## The owner
- Talks in: **{{OWNER_LANGUAGE}}** — reply in this language, short and friendly, no jargon unless needed.
- Coding skill: {{CODING_SKILL}}
- Budget for paid services: {{BUDGET}}
- Uses: {{OWNER_DEVICE}} (give commands that work there, ready to copy-paste, one step at a time)

## Source of truth
| File | Use it when |
|---|---|
| `AGENTS.md` | Always — read first |
| `docs/ROADMAP.md` | Picking and finishing work cards |
| `docs/DECISIONS.md` | The owner's decisions in their own words (newest wins) |
| `docs/adr/` | Locked decisions (stack, money, security, big design choices) |
| `docs/BACKLOG.md` | Parked ideas — never build these unless the owner says so |
| `docs/CHANGELOG.md` | One line per finished card |
| `docs/HANDOFF.md` | Switching to another AI, or coming back after a break |
| `PROMPTS.md` | Ready-made prompts the owner pastes |

**When files disagree:** ADR > DECISIONS (newest wins) > everything else.
If they disagree about anything in the Red Zone, stop and ask the owner. Never pick silently.

## Stack (locked — see `docs/adr/0001-stack.md`)
{{STACK}}

## 🔴 Red Zone — always ask the owner first
Never guess here. Stop, explain the choice in plain words, give 2–3 options with your recommendation, and wait.
- Money: prices, payments, refunds, balances, anything users pay for
- Deleting or overwriting stored data, users, files, or history (a delete button the USER presses is normal — just make it ask "are you sure?")
- Security: passwords, API keys, logins, permissions
- Going live: deploying to real users, sending emails/messages to real people
- Spending money: any new paid service, plugin, API, or plan
- Changing a pillar or an ADR
{{EXTRA_RED_ZONE — delete this line if the owner has nothing to add}}

## Work rules (all AIs)
1. **One card at a time** from `docs/ROADMAP.md`. One card = one branch `feat/<ID>-<slug>` = one PR. Never push to `main`.
   (No GitHub? Same branches locally; instead of a PR, show the owner a plain-words summary and merge to `main` only after they say OK.)
2. **Plan before big edits.** Before changing more than 3 existing files, write a short plan and wait for the owner's OK.
3. **"Done" means verified.** Build and tests pass, and YOU ran them (or opened the app yourself) — don't ask the owner to run checks unless there's no other way, and then give copy-paste commands. Always list separately:
   ✅ what you checked, ⚠️ what you have NOT tried for real. Never call something done that you did not verify.
4. **No secrets in code or git.** Use `.env` (already in `.gitignore`); when you add the first secret, create `.env.example` with the variable names and keep it updated.
5. **Small choices:** for small UX details, pick one yourself and note it in the PR. Red Zone → ask.
6. **Stay on the card.** Ideas outside it go to `docs/BACKLOG.md` under "From development". Don't build them.
7. **Fail safe.** If something that creates or moves value (money, credits, orders, stock) can fail halfway,
   the safe failure is "the user got nothing and can be refunded" — never "the user got it twice".
   Anything that creates value must be safe to run twice (idempotent).
8. **Numbers the owner may want to tune live in config**, not scattered in code. (Tiny project? A clearly marked block at the top of the file is fine.)
9. **User-facing text** lives in one place (language files, or one clearly marked block for tiny projects) — never scattered.
10. **Finishing a card:** tick it in ROADMAP, update "Status" below, add one line to `docs/CHANGELOG.md`,
    and fix the docs if what you built differs from what they say.
11. Commit messages in English, Conventional Commits (`feat:`, `fix:`, `docs:` …).

## The two-AI team
| | **Lead** — {{LEAD_AI}} | **Helper** — {{HELPER_AI}} |
|---|---|---|
| Main job | Architecture, Red Zone work, reviews every Helper PR, keeps docs consistent | Content, UI, text, tests, second-opinion reviews |
| Takes cards tagged | `[Lead]` | `[Helper]` |
| Cards tagged `[any]` | Whoever is free first — write your name on the card before starting | same |

**Flow per card:** pull → read `AGENTS.md` → read the card → branch → build → test → update Status + CHANGELOG → open PR → **the other AI reviews** → the owner merges.

## Status (update at the end of EVERY session)
- Last update: {{TODAY}} ({{WHO}})
- Done: —
- In progress: —
- ⚠️ Not tested for real yet: —
- Waiting for the owner: —
- **Next card:** —
