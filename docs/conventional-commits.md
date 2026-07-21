## Conventional Commits

Format: `<type>(<scope>): <summary>`
(scope is optional)

### Types
feat:      new feature
fix:       bug fix
refactor:  code change that's neither a fix nor a feature
chore:     maintenance (deps, config, tooling — no source change)
docs:      documentation only
test:      adding or fixing tests
style:     formatting, whitespace, semicolons — no logic change
perf:      performance improvement
build:     build system or external dependencies
ci:        CI/CD config changes
revert:    reverts a previous commit

### Rules of thumb
- Imperative mood: "add" not "added"/"adds"
- Lowercase summary, no trailing period
- Under ~72 characters
- One logical change per commit

### Examples
feat: add spaced repetition scheduler
feat(api): add endpoint for due vocab items
fix: correct due-date calculation off-by-one
fix(auth): handle expired JWT on refresh
refactor: extract scheduler logic into own module
chore: bump fastapi to 0.115
docs: add setup instructions to README
test: add cases for interval calculation edge cases
revert: revert "feat: add spaced repetition scheduler"

### Breaking changes
Add `!` after type/scope, or a `BREAKING CHANGE:` footer:
feat(api)!: change /review endpoint response shape

BREAKING CHANGE: `score` field renamed to `grade`
