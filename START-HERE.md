# Start here — the setup prompt

Open your AI coding tool **inside your project folder** (empty or existing) and paste this.
The AI will interview you, then create every file for you. You don't need to write anything yourself.

```text
Set up "AI Crew Kit" in this project. Source: https://github.com/minjuhehe/ai-crew-kit (folder: template/).

1. Copy every file from template/ into this project's root (keep the folder structure).
   If a file already exists here, do NOT overwrite it — show me the difference and ask.
2. Interview me. Ask ONE question at a time, in plain words, and wait for each answer:
   a) What are you building, and who is it for? (one or two sentences is fine)
   b) What 3 things must never be sacrificed? (these become the Pillars)
   c) Which language should the AIs talk to you in?
   d) How much can you code? (none / a little / yes)
   e) Which AIs will you use? Which one is the Lead (the careful one), which one is the Helper?
   f) Budget for paid services per month, and what device/OS you work on.
   g) Anything that should ALWAYS need your approval, besides money, deleting, security, going live and spending?
   If this folder already has code, also read it and tell me what stack you see instead of asking me.
3. Fill in every {{PLACEHOLDER}} in the copied files from my answers. Remove any line that doesn't apply.
   Write AGENTS.md in English (so every AI reads it the same way) but talk to me in my language.
4. Propose the stack (if there is no code yet) in plain words, with 1 alternative, and wait for my OK. Then fill docs/adr/0001-stack.md.
5. Turn what I want into the first 5–10 cards in docs/ROADMAP.md, smallest useful thing first. Show me the list and wait for my OK.
6. Log my answers as the first entries in docs/DECISIONS.md, in my own words.
7. Commit on a new branch `chore/ai-crew-kit-setup`, then tell me in 5 lines what you set up and which prompt from PROMPTS.md I should use next.
```

**No AI coding tool?** Click **Use this template** on GitHub (or copy the `template/` folder by hand), then paste the prompt above into any chat AI together with the files.
