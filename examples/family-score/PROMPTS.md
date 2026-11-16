# Prompts — copy, paste, replace the `<…>` parts

> These assume the AI can open your repository (Claude Code, Codex, Cursor, Copilot agent…).
> No repo access? Use #9 at the bottom.

---

## 1. Start the Lead AI (once per new chat/session)
```text
You are the LEAD engineer on this project. Read AGENTS.md (and CLAUDE.md if you are Claude) fully before anything else.
Then tell me in 5 lines or fewer: where the project is (from Status), what you think the next card is, and anything that looks wrong or inconsistent in the docs.
Do not change any files yet.
```

## 2. Start the Helper AI (once per new chat/session)
```text
You are the HELPER engineer on this project. The Lead AI does architecture and anything in the Red Zone; you do cards tagged [Helper] or [any].
Read AGENTS.md fully before anything else, then docs/ROADMAP.md.
Tell me in 5 lines or fewer which card you would take next and why. Do not change any files yet.
```

## 3. Do a card
```text
Do card <CARD-ID> from docs/ROADMAP.md.
- Read AGENTS.md and the card first.
- Branch: feat/<CARD-ID>-<slug>
- If you need to change more than 3 existing files, show me a short plan and wait.
- Finish with: build + tests passing, Status updated in AGENTS.md, one CHANGELOG line, PR opened.
- In your final message, tell me in plain words what users will see, then list ✅ checked / ⚠️ not tried for real.
```

## 4. Review a PR (give this to the OTHER AI)
```text
Review PR <link or number> against card <CARD-ID> and AGENTS.md. Do NOT edit code — report only.
Check in this order and list problems from most to least serious, with file:line:
1. Money / data: can anything be created twice, lost, or charged wrongly? Is it safe to run twice?
2. Security: secrets in code? missing permission checks? user input trusted blindly?
3. Matches the docs: numbers, names, behavior match the card, DECISIONS and ADRs?
4. Tests: is the important logic tested? are the edge cases tested?
5. Done properly: Status, CHANGELOG, .env.example updated? text in language files?
End with either "Ready to merge" or "Not ready" + the must-fix list, in plain words I can understand.
```

## 5. The AI is drifting / broke a rule
```text
Stop. Re-read the "Work rules" and "Red Zone" sections of AGENTS.md.
Tell me which rule your recent work broke, and propose the smallest fix. Don't change anything until I say OK.
```

## 6. "Is it really done?"
```text
Before I believe this is done: list exactly what you ran or opened to check it, and the result.
Then list everything you have NOT tried for real. Be honest — "not tested" is fine, "done" when it isn't is not.
```

## 7. Explain it to me
```text
Explain what you just did as if I'm not a programmer: what will users see or notice, what could go wrong, and what (if anything) I need to do. Max 6 lines.
```

## 8. Close the session (every time, before you stop)
```text
Before we stop:
1) Update "Status" in AGENTS.md so it matches reality (done / in progress / not tested / waiting for me / next card).
2) Add the CHANGELOG line if missing.
3) If switching AI or taking a break, fill docs/HANDOFF.md.
4) Commit and push the current branch.
5) Give me a 5-line summary in my language.
```

## 9. Fallback — the AI can't open the repo (chat only)
Attach `AGENTS.md`, the card from `docs/ROADMAP.md`, and the files it needs. Then:
```text
You can't open the repo. Work only from the attached files.
Do card <CARD-ID>. Answer with complete files, one by one, like:
=== path/to/file ===
<the whole file — never write "rest unchanged">
End with the exact commands I need to run to build and test, and what I should check by hand.
```
Then have the Lead AI review it (#4) before you merge.
