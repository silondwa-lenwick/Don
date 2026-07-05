"""FastAPI application exposing the crisis-message triage model.

Endpoints:
  GET  /api/health      -> service + model status
  GET  /api/categories  -> the categories the model can assign
  POST /api/triage      -> classify a single help-request message
"""

from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from .data import CATEGORIES
from .model import TriageModel

# Higher number = more urgent. Used to give responders an at-a-glance priority.
PRIORITY = {
    "Rescue": 5,
    "Medical": 4,
    "Food & Water": 3,
    "Shelter": 2,
    "Other": 1,
}

app = FastAPI(
    title="AI for Good — Crisis Message Triage",
    description=(
        "Classifies incoming help-request messages into need categories so "
        "disaster-relief responders can prioritise their response."
    ),
    version="1.0.0",
)

# Vite dev server runs on 5173; allow it (and localhost variants) during dev.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

model = TriageModel()


class TriageRequest(BaseModel):
    message: str = Field(..., min_length=1, description="The help-request text.")


class TriageResponse(BaseModel):
    category: str
    confidence: float
    priority: int
    scores: dict[str, float]


@app.get("/api/health")
def health() -> dict[str, object]:
    return {"status": "ok", "model_ready": model is not None}


@app.get("/api/categories")
def categories() -> dict[str, list[str]]:
    return {"categories": CATEGORIES}


@app.post("/api/triage", response_model=TriageResponse)
def triage(request: TriageRequest) -> TriageResponse:
    prediction = model.predict(request.message)
    return TriageResponse(
        category=prediction.category,
        confidence=prediction.confidence,
        priority=PRIORITY.get(prediction.category, 1),
        scores=prediction.scores,
    )
