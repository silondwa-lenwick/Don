# AGENTS.md

## Project overview

"AI for Good" **Crisis Message Triage** app. Two services:

- `backend/` — FastAPI + scikit-learn text classifier. Trains a TF-IDF +
  Logistic Regression model in-memory at startup from `backend/app/data.py`.
- `frontend/` — React + TypeScript + Vite UI that calls the backend.

See `README.md` for the full setup/run/lint/build commands.

## Cursor Cloud specific instructions

- The update script installs both services' dependencies (backend venv +
  `pip install`, and frontend `npm install`). It does not start any servers.
- Run the two dev servers in separate long-lived shells (e.g. tmux), not as
  one-shot background processes:
  - Backend: from `backend/`, `. .venv/bin/activate` then
    `uvicorn app.main:app --reload --port 8000`.
  - Frontend: from `frontend/`, `npm run dev` (serves on port 5173).
- The frontend talks to the backend through Vite's dev proxy (`/api` →
  `http://localhost:8000`, configured in `frontend/vite.config.ts`). Start the
  backend first, or `/api` calls from the UI will 502 until it is up.
- The backend venv lives at `backend/.venv`. Always activate it before running
  `uvicorn` or the `app` package import will fail on missing deps.
- Harmless warning: scikit-learn 1.6.1 + scipy 1.18 prints
  `OptimizeWarning: Unknown solver options: iprint` when the LogisticRegression
  model trains. It does not affect predictions; ignore it.
- There is no persisted model artifact — the model retrains on every backend
  start, which takes well under a second, so restarts are cheap.
