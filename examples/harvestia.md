# Case study: Harvestia

**Harvestia** is a Minecraft MMORPG server for Thai players (Java + Bedrock/mobile): pick a class, level up across zones,
fight bosses, do quests, farm for money, upgrade weapons +1…+15, join guilds, and buy cosmetics in a web store with Thai payments.

The owner **does not write code**. Everything was built by two AIs following the rules in this kit:
Claude (Claude Code) as **Lead**, a second AI as **Helper**.

## Numbers from the first weeks
- ~170 commits
- ~37,000 lines of Java (server plugin) + a Next.js web store
- 17 spec files, 18 ADRs (locked decisions), 100+ owner decisions logged in the owner's own words
- Systems: economy with a ledger, items, mail, classes & skills, monsters & drops, bosses, quests, parties, guilds,
  multi-channel chat, PvP & duels, weapon upgrades, runes, attributes, ranks, web store delivery

## What worked
- **Shared memory file.** Switching between AIs, or coming back after days, took one prompt instead of an hour of re-explaining.
- **Red Zone.** Money and item rules ("lose rather than duplicate") were never left to the AI's guess. Big changes that create money or items got an adversarial "try to break it" review by a second AI before going live.
- **Owner decisions in the owner's words.** When the owner changed their mind (and they did, often), the newest entry won and the AI updated the docs instead of arguing with an old version.
- **Backlog instead of scope creep.** AI ideas went into a list, not into the code.
- **Cross-review.** The second AI caught things the first one was sure about.

## What we'd do differently (now built into the kit)
- **The Status section grew huge.** It became a diary. → The kit says: keep `AGENTS.md` under ~200 lines, move history to `HANDOFF.md`.
- **New features were started faster than old ones were tested.** → Every Status now has a "⚠️ Not tested for real yet" line, and prompt #6 asks "is it REALLY done?".
- **Specs drifted apart.** Two files said different numbers. → Clear precedence (ADR > DECISIONS newest > rest), and the Lead must report conflicts instead of choosing silently.
- **Late-night "just push it live".** → Going live is in the Red Zone by default.
