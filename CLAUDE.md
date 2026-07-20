## GitHub Identity
Before any git push, PR, or gh command in this repo, run:
export GH_TOKEN=$(cat .bot-token)
Verify with `auth status` that it shows `TheBountyBear` account before proceeding.
DO NOT push any changes to GitHub using Hantanlea account

## Git workflow
- Never push directly to `main`.
- Always work on the `dev` branch. Commit and push there without asking permission per commit.
- When a change is ready, open a PR from `dev` into `main` with `gh pr create`.
- Never merge the PR — leave that for the user.
