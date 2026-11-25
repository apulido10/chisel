# Chisel

![CI](https://github.com/apulido10/chisel/actions/workflows/ci.yml/badge.svg)

A day-by-day fitness tracker. Each day shows the workout you need to hit, and lets you log your weight, calories, the sets you actually did, and a progress photo. Then compare any day with the same day last week to see real progress.

## How it works

- **Plan:** set up a weekly workout split (e.g. Monday = push day).
- **Log:** each day, check off your planned exercises and record your weight, calories, sets, and a photo.
- **Compare:** see this Monday next to last Monday — weight, calories, sets, and photos side by side.

## Features

- [x] Weight of the day: logic and unit tests
- [ ] Day-by-day view with navigation
- [ ] Log weight and calories
- [ ] Weekly workout plan with a daily checklist
- [ ] Log the sets you actually hit
- [ ] Picture of the day
- [ ] Compare a day with the same day last week
- [ ] iOS and Android app with Capacitor

## Tech stack

- **React** + **TypeScript**, built with **Vite**
- **Tailwind CSS** for styling
- **Vitest** for unit tests
- **ESLint** + **Prettier** for code quality
- **GitHub Actions** for CI
- **Capacitor** (planned) for iOS and Android

## Getting started

Requires Node.js (version in `.nvmrc`).

```bash
git clone https://github.com/apulido10/chisel.git
cd chisel
npm install
npm run dev
```

Then open http://localhost:5173.

## Scripts

| Command                | What it does                            |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the dev server                    |
| `npm run build`        | Type-check and build for production     |
| `npm test`             | Run tests once                          |
| `npm run test:watch`   | Run tests on every save                 |
| `npm run lint`         | Check code with ESLint                  |
| `npm run format`       | Format code with Prettier               |
| `npm run format:check` | Check formatting without changing files |

## Development workflow

- Work is planned as GitHub Issues, grouped into milestones.
- Each change happens on a branch (`feat/`, `fix/`, `chore/`, `docs/`) and is merged through a pull request.
- `main` is protected: changes require a pull request, and CI must pass.

## CI

Every push runs GitHub Actions:

1. Check formatting (Prettier)
2. Lint (ESLint)
3. Build (TypeScript + Vite)
4. Run tests (Vitest)

## Project structure

```
src/
├── lib/        Plain logic and its tests (e.g. weight.ts)
├── App.tsx     Top-level component
└── main.tsx    App entry point
docs/
├── decisions/      Architecture decision records
└── learning-log.md What I've learned building Chisel
```

## Docs

- [Architecture decisions](docs/decisions/): why the project is built the way it is
- [Learning log](docs/learning-log.md): what I've learned along the way
