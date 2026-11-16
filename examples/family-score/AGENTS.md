# Family Score (แต้มบ้านเรา) — Shared Project Memory

> **Every AI on this project reads this file before starting work, and updates the "Status" section before finishing.**
> The owner is not a programmer. Explain results in plain words — what users will see — not how the code works.
> Keep this file short (under ~200 lines). Move old status notes to `docs/HANDOFF.md`.

## What we are building
A one-page website for keeping score in family board games. It is used on a phone, passed around the table, by 2–6 people at home. Everything is in Thai. No accounts, no server: scores are saved on the phone itself.

## Pillars (never cut or change without the owner)
1. Easy on a phone — big buttons, one hand, no tiny text.
2. No sign-up — open the page and play. No accounts, no logins, no email.
3. Scores never disappear when the page is closed or reloaded.

## The owner
- Talks in: **Thai (ภาษาไทย)** — reply in this language, short and friendly, no jargon unless needed.
- Coding skill: None. The owner cannot read code — always explain in terms of what they will see on the phone.
- Budget for paid services: 0 baht. Free services only; anything paid is Red Zone.
- Uses: Windows PC + Android phone (give commands that work there, ready to copy-paste, one step at a time)
- Cares most about: The three pillars: big buttons on mobile, no sign-up, scores survive closing the page.

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
- One static web page: `index.html` + plain JavaScript + CSS. No framework, no build step.
- Saved data: the browser's `localStorage` on the phone (no server, no database, no accounts).
- User-facing Thai text in `lang/th.js`; tunable numbers in `config.js`.
- Checks: a Playwright script (`tests/check.js`, Node 20+) that opens the page at phone size. The AI runs it; the owner does not need to.
- Hosting (later, card P0.5, Red Zone "going live"): GitHub Pages, free.

## 🔴 Red Zone — always ask the owner first
Never guess here. Stop, explain the choice in plain words, give 2–3 options with your recommendation, and wait.
- Money: prices, payments, refunds, balances, anything users pay for
- Deleting or overwriting data, users, files, or history
- Security: passwords, API keys, logins, permissions
- Going live: deploying to real users, sending emails/messages to real people
- Spending money: any new paid service, plugin, API, or plan
- Changing a pillar or an ADR

## Work rules (all AIs)
1. **One card at a time** from `docs/ROADMAP.md`. One card = one branch `feat/<ID>-<slug>` = one PR. Never push to `main`.
2. **Plan before big edits.** Before changing more than 3 existing files, write a short plan and wait for the owner's OK.
3. **"Done" means verified.** Build and tests pass before you say done. Always list separately:
   ✅ what you checked, ⚠️ what you have NOT tried for real. Never call something done that you did not verify.
4. **No secrets in code or git.** Use `.env` (git-ignored) and keep `.env.example` updated with every new variable.
5. **Small choices:** for small UX details, pick one yourself and note it in the PR. Red Zone → ask.
6. **Stay on the card.** Ideas outside it go to `docs/BACKLOG.md` under "From development". Don't build them.
7. **Fail safe.** If something that creates or moves value (money, credits, orders, stock) can fail halfway,
   the safe failure is "the user got nothing and can be refunded" — never "the user got it twice".
   Anything that creates value must be safe to run twice (idempotent).
8. **Numbers live in config**, not in code, so the owner can tune them.
9. **User-facing text** lives in language files, not hardcoded.
10. **Finishing a card:** tick it in ROADMAP, update "Status" below, add one line to `docs/CHANGELOG.md`,
    and fix the docs if what you built differs from what they say.
11. Commit messages in English, Conventional Commits (`feat:`, `fix:`, `docs:` …).

## The two-AI team
| | **Lead** — Claude (Claude Code) | **Helper** — GPT (ChatGPT / Codex) |
|---|---|---|
| Main job | Architecture, Red Zone work, reviews every Helper PR, keeps docs consistent | Content, UI, text, tests, second-opinion reviews |
| Takes cards tagged | `[Lead]` | `[Helper]` |
| Cards tagged `[any]` | Whoever is free first — write your name on the card before starting | same |

**Flow per card:** pull → read `AGENTS.md` → read the card → branch → build → test → update Status + CHANGELOG → open PR → **the other AI reviews** → the owner merges.

## Status (update at the end of EVERY session)
- Last update: 2026-11-16 (Claude, card P0.1)
- Done: setup (`chore/ai-crew-kit-setup`); P0.1 Scoreboard v1 on branch `feat/P0.1-scoreboard` (not merged — no remote/PR yet).
- In progress: —
- ⚠️ Not tested for real yet: on a real Android phone (only tested in headless Chromium at phone size); data survives only in the same browser — clearing browser data or incognito loses it.
- Waiting for the owner: a GitHub account/repo so PRs and P0.5 (going live) are possible; Helper (GPT) review of P0.1.
- **Next card:** P0.2 — New game (reset scores, keep players)
