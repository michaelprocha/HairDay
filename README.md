# HairDay

HairDay is a barbershop scheduling app built with React, TypeScript, and Vite. It lets you manage your daily agenda — book appointments, pick a date and time slot, and view, sort, and delete the day's appointments grouped by time of day.

## Features

- **Appointment scheduling** – create appointments by selecting a date, a time slot, and the client's name.
- **Daily agenda** – view appointments for a selected date, grouped into morning, afternoon, and evening shifts.
- **Slot availability** – time slots already booked for the selected date are disabled.
- **Appointment management** – delete appointments directly from the agenda.
- **Chronological ordering** – appointments are sorted by time within each shift.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) with `tailwind-variants` and `tailwind-merge`
- [json-server](https://github.com/typicode/json-server) for the local mock API
- [Vitest](https://vitest.dev/) and [Playwright](https://playwright.dev/) for tests
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

## Getting Started

### Prerequisites

- Node.js (v20 or newer is recommended)

### Installation

```bash
npm install
```

### Running the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Running the mock API

The app reads and writes appointments through a local `json-server` backed by `mock/db.json`:

```bash
npm run server
```

The API runs at `http://localhost:3000` with the `GET /schedule`, `POST /schedule`, and `DELETE /schedule/:id` endpoints. Start this alongside the dev server for the app to load real data.

> Note: `mock/` is git-ignored, so the local database is not versioned.

## Scripts

| Command                | Description                            |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start the Vite dev server              |
| `npm run build`        | Type-check and build for production    |
| `npm run preview`      | Preview the production build           |
| `npm run lint`         | Run ESLint                             |
| `npm run prettier`     | Format all files with Prettier         |
| `npm run server`       | Start the json-server mock API         |
| `npm run test`         | Run unit tests with Vitest             |
| `npm run test:ui`      | Run unit tests with the Vitest UI      |
| `npm run test:e2e`     | Run end-to-end tests with Playwright   |
| `npm run test:e2e:ui`  | Run e2e tests with the Playwright UI   |

## Project Structure

```text
src/
├── components/
│   ├── layout/      # Page layout sections (Aside, Main, Home)
│   ├── shared/      # Reusable sections (Form, Schedule, Shift, Shifts)
│   └── ui/          # Low-level UI primitives (Button, DateInput, Icon)
├── hooks/           # Custom hooks (useAppointment)
├── page/            # Page-level components (Home)
├── services/        # API communication (schedule service)
├── styles/          # Global styles
├── test/            # Test setup
└── types/           # Shared TypeScript types
```

## License

[MIT](LICENSE)
