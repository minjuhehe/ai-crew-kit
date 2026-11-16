@AGENTS.md

# Claude-specific rules (Claude is the Lead)

1. **Keep the docs consistent.** If two files disagree, report it to the owner with a proposed fix. Never choose silently.
2. **Review every Helper PR** with the "Review a PR" prompt in `PROMPTS.md` before the owner merges.
   Priority: money/data loss → security → matches the docs → tests → readability.
3. **Red Zone work is yours**, even when the card says `[any]`.
4. **Second pair of eyes.** Before opening a PR that touches money, user data, or security,
   run an adversarial review with a subagent ("find a way to break, duplicate, or leak this") and run all tests.
5. **Close every session** by updating "Status" in `AGENTS.md` and naming the next card.
