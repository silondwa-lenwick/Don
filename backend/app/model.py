"""Lightweight text-classification model for crisis-message triage.

Trains a TF-IDF + Logistic Regression pipeline on the seed dataset at import
time. The model is small enough to train in well under a second, so there is
no need to persist it to disk for this demo.
"""

from __future__ import annotations

from dataclasses import dataclass

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

from .data import CATEGORIES, TRAINING_DATA


@dataclass
class Prediction:
    category: str
    confidence: float
    scores: dict[str, float]


class TriageModel:
    """Wraps a scikit-learn pipeline for classifying help-request messages."""

    def __init__(self) -> None:
        texts = [text for text, _ in TRAINING_DATA]
        labels = [label for _, label in TRAINING_DATA]

        self.pipeline: Pipeline = Pipeline(
            [
                (
                    "tfidf",
                    TfidfVectorizer(
                        ngram_range=(1, 2),
                        stop_words="english",
                        sublinear_tf=True,
                    ),
                ),
                (
                    "clf",
                    LogisticRegression(max_iter=1000, C=4.0),
                ),
            ]
        )
        self.pipeline.fit(texts, labels)

    def predict(self, message: str) -> Prediction:
        probabilities = self.pipeline.predict_proba([message])[0]
        classes = list(self.pipeline.classes_)
        scores = {cls: float(prob) for cls, prob in zip(classes, probabilities)}
        # Ensure every known category appears, even if unused during training.
        for category in CATEGORIES:
            scores.setdefault(category, 0.0)

        best_category = max(scores, key=scores.get)
        return Prediction(
            category=best_category,
            confidence=scores[best_category],
            scores=scores,
        )
