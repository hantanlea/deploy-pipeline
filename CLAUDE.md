## Frontend
The frontend lives in `frontend/` (Vite + React + Tailwind). It's built separately (`npm run build` in `frontend/`, output to `frontend/dist`) and served by FastAPI as static files at `/`. `frontend/dist` is gitignored and not committed — Railway builds it fresh on deploy via `railpack.json`.

## Git workflow
- Never push directly to `main`.
- Create a new branch for every task — see `docs/git-workflow.md` for naming and commit conventions.
- Open a PR with `gh pr create` when the change is ready.
- Never merge the PR — leave that for the user.
