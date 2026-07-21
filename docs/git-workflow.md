# Git Workflow

## Branches
- Never push directly to `main`.
- Create a new branch for every task/change — never reuse or leave long-lived branches.
- Naming: `<type>/<short-kebab-description>`, e.g. `feat/spaced-repetition-scheduler`, `fix/due-date-calc`.
- Types: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`.
- Branches are auto-deleted on merge (GitHub repo setting) — this is expected, not a bug.

## Commits
- Format: `<type>: <short summary>` (Conventional Commits).
- Summary in imperative mood, lowercase, no trailing period, under ~72 characters.
- Keep commits small and scoped to one logical change.
- Examples: `feat: add spaced repetition scheduler`, `fix: correct due-date calculation`.

## Pull Requests
- Open with `gh pr create --fill` once a change is ready.
- PR title should follow the same `<type>: <summary>` convention as commits.
- Squash merge is the default merge strategy.
- To have the PR auto-reviewed and merged, arm auto-merge (`gh pr merge --auto --squash`) and comment `@clavius review` on it. The bot (`agent-clavius[bot]`) reviews the diff and either approves — which lets auto-merge complete — or requests changes with specific feedback. Only comments from `hantanlea` or `TheBountyBear` trigger it.

