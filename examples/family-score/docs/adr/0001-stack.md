# ADR 0001 — Tech stack

- Status: Accepted (owner approved 2026-11-16)

## Context
The owner wants "เว็บหน้าเดียวไว้จดแต้มบอร์ดเกมในครอบครัว เล่นบนมือถือ คนในบ้าน 2-6 คน".
Pillars: big buttons on mobile, no sign-up, scores survive closing the page. Budget: 0 baht.
The owner cannot code and works on Windows + Android. One phone is passed around the table, so
scores only need to live on that one phone — no sharing between devices is needed.

## Decision
1. One static web page: `index.html` + plain JavaScript + CSS. No framework, no build step.
2. Scores and players are saved in the browser's `localStorage` on the phone. No server, no database, no accounts.
3. Thai text in `lang/th.js`; tunable numbers (min/max players, button amounts) in `config.js`.
4. Automated check: `tests/check.js` (Playwright, Node 20+) opens the page at phone size, adds players and scores, reloads, and checks the scores are still there.
5. Hosting later (card P0.5, needs the owner's OK): GitHub Pages, free.

Alternative considered: web page + free online database (Firebase) so scores sync across phones.
Rejected for now: needs an account/project to manage, adds security work, and the owner does not need multi-phone sync.

## Consequences
- Simple and free; works offline once opened.
- Scores live on ONE phone/browser. Clearing browser data or switching phones loses them (owner must be told this).
- Changing any of these needs a new ADR and the owner's approval.
