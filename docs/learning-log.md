# Learning Log

What I've learned while building Chisel.

## Git and GitHub

- Push uploads commits; a pull request asks to merge them into main.
- Writing "Closes #1" in a PR closes the issue when it merges.
- GitHub doesn't accept passwords for Git. I fixed it with `gh auth login`.

## Testing

- `describe` groups tests, `it` is one test, and `expect` is the check.
- `expect` always goes inside a test, not directly in `describe`.

## CI

- CI only sees committed files. My first run failed because I never created `.nvmrc`.
