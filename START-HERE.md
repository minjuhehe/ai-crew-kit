# Start here — the setup prompt

Open your AI coding tool **inside your project folder** (empty or existing) and paste this.
The AI will interview you, then create every file for you. You don't need to write anything yourself.

```text
Set up "AI Crew Kit" in this project. Source: https://github.com/minjuhehe/ai-crew-kit (folder: template/).

1. Copy every file from template/ into this project's root (keep the folder structure).
   If a file already exists here, do NOT overwrite it — show me the difference and ask.
2. Interview me. Ask ONE question at a time, in plain words, and wait for each answer:
   a) What's the project called? What are you building, and who is it for? (one or two sentences is fine)
   b) What 3 things must never be sacrificed? (these become the Pillars)
   c) Which language should the AIs talk to you in?
   d) How much can you code? (none / a little / yes)
   e) Which AIs will you use, and HOW (a coding tool that opens this folder, like Claude Code / Codex / Cursor — or just a chat window)?
      Which one is the Lead (the careful one), which one is the Helper? One AI is fine: it plays both roles.
   f) Do you have a GitHub account for this project? (If not, we work with local git only.)
   g) Budget for paid services per month, and what device/OS you work on.
   h) Anything that should ALWAYS need your approval, besides money, deleting data, security, going live and spending?
   If this folder already has code, read it and tell me what stack you see instead of asking me.
3. Fill in every {{PLACEHOLDER}} in the copied files from my answers — EXCEPT docs/HANDOFF.md, which stays a blank form until the first handoff.
   Remove lines that don't apply (e.g. the {{EXTRA_RED_ZONE}} line if I have nothing to add).
   Delete the per-tool files for AIs I don't use (CLAUDE.md is for Claude Code, GEMINI.md for Gemini CLI). Codex, Cursor and Copilot read AGENTS.md directly — no extra file needed.
   Write AGENTS.md in English (so every AI reads it the same way) but always talk to me in my language.
4. If there is no code yet, propose the stack in plain words — the simplest thing that works, with 1 alternative — and wait for my OK. Then fill docs/adr/0001-stack.md.
5. Turn what I want into the first 5–10 cards in docs/ROADMAP.md, smallest useful thing first (something I can see and try), replacing the example cards. Show me the list and wait for my OK.
6. Log each of my answers as its own row in docs/DECISIONS.md, in my own words.
7. Git: if the folder isn't a git repo yet, run `git init -b main`. If `main` has no commits, commit the kit files directly on `main` as the first commit;
   otherwise commit on a new branch `chore/ai-crew-kit-setup`. If I have GitHub, help me connect the remote step by step (copy-paste commands).
   If I don't have GitHub: cards still get their own branch, and instead of a pull request you show me a plain-words summary and merge to main only after I say OK.
8. Tell me in 5 lines what you set up and which prompt from PROMPTS.md I should use next.
```

**No AI coding tool?** Click **Use this template** on GitHub (or copy the `template/` folder by hand), then paste the prompt above into any chat AI together with the files.

**Copy the files yourself into a new, empty folder:**
```bash
npx degit minjuhehe/ai-crew-kit/template my-project
```
(For a folder that already has files, use the setup prompt instead — degit won't merge into a non-empty folder.)
