## Frontend
The frontend lives in `frontend/` (Vite + React + Tailwind). It's built separately (`npm run build` in `frontend/`, output to `frontend/dist`) and served by FastAPI as static files at `/`. `frontend/dist` is gitignored and not committed — Railway builds it fresh on deploy via `railpack.json`.

## Git workflow
- Never push directly to `main`.
- Always work on the `dev` branch. Commit and push there without asking permission per commit.
- When a change is ready, open a PR from `dev` into `main` with `gh pr create`.
- Never merge the PR — leave that for the user.
