# Roadmap — work cards

> One card = one branch = one PR. Tags: `[Lead]` `[Helper]` `[any]`.
> Status: ⬜ not started · 🔄 in progress · ✅ done · ⏸ waiting for the owner
> A card is **done** only when its "Done when" is true AND it was checked for real (not just "the code compiles").

## Phase 0 — First playable scoreboard
| ID | Card | Tag | Done when | Status |
|---|---|---|---|---|
| P0.1 | Scoreboard v1: add 2–6 players by name, big +1 / −1 buttons, scores saved on the phone. Includes `config.js`, `lang/th.js`, `tests/check.js` | [Lead] | On a phone-size screen: add 3 players, give points, close and reopen the page → same names and scores. `node tests/check.js` passes | ✅ |
| P0.2 | New game: reset all scores to 0 but keep the players (asks "แน่ใจไหม?" first) | [any] | Tap "เกมใหม่" → confirm → all scores 0, names stay; cancel → nothing changes | ⬜ |
| P0.3 | Bigger steps: +5 / +10 buttons and "type a number" for games with big scores | [Helper] | Can add 5, 10, or any typed number (including minus) to a player | ⬜ |
| P0.4 | Who's winning: highlight the leader and an option to sort by score | [Helper] | The player with the most points is clearly marked; ties are marked too | ⬜ |
| P0.5 | Put it online for free (GitHub Pages) + "Add to Home screen" guide in Thai | [Lead] ⏸ | Owner opens a link on the Android phone and can add it to the home screen. **Red Zone: going live — owner approves first** | ⬜ |

## Phase 1 — Nice to have
| ID | Card | Tag | Done when | Status |
|---|---|---|---|---|
| P1.1 | Undo the last score change | [any] | Tapping "ย้อนกลับ" undoes exactly the last change, also after a reload | ⬜ |
| P1.2 | Rename or remove a player (remove asks first) | [any] | Can fix a typo in a name; removing a player asks first and keeps others' scores | ⬜ |
