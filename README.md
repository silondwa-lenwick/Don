# Don — AI for Good: Crisis Message Triage

An "AI for Good" web app that helps disaster-relief responders triage incoming
help-request messages. You paste a message, and a lightweight machine-learning
model classifies it into a **need category** (Rescue, Medical, Food & Water,
Shelter, Other) and assigns a **priority**, so responders can act on the most
urgent cases first. It runs fully locally with no paid API keys.

## Architecture

| Service    | Stack                                   | Port | Dev command |
|------------|-----------------------------------------|------|-------------|
| `backend`  | FastAPI + scikit-learn (TF-IDF + Logistic Regression) | 8000 | `uvicorn app.main:app --reload --port 8000` |
| `frontend` | React + TypeScript + Vite               | 5173 | `npm run dev` |

The Vite dev server proxies `/api/*` to the backend, so the frontend calls the
API using same-origin relative URLs during development.

The model is trained in-memory at startup on a small seed dataset
(`backend/app/data.py`); no model file is persisted.

## Prerequisites

- Python 3.12+
- Node.js 22+

## Setup

Backend:

```bash
cd backend
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

Frontend:

```bash
cd frontend
npm install
```

## Running (development)

In one terminal:

```bash
cd backend
. .venv/bin/activate
uvicorn app.main:app --reload --port 8000
```

In another terminal:

```bash
cd frontend
npm run dev
```

Then open http://localhost:5173.

## Lint / Build / Test

- Frontend lint: `cd frontend && npm run lint`
- Frontend build: `cd frontend && npm run build`

## API

- `GET  /api/health` — service and model status
- `GET  /api/categories` — list of need categories
- `POST /api/triage` — body `{ "message": "..." }` → `{ category, confidence, priority, scores }`
