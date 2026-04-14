from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from risk_engine import detect_risks
from recommendation import recommend
from severity_engine import calculate_severity
from rag_engine import RAGEngine

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = RAGEngine()


@app.post("/analyze")
def analyze(data: dict):

    text = data["text"]

    risks = detect_risks(text)

    severity = calculate_severity(risks)

    retrieved = engine.db.search(text)

    recommendations = recommend(risks)

    final_output = engine.generate(
        text,
        risks,
        retrieved,
        recommendations,
        severity
    )

    return {
        "risks": risks,
        "severity": severity,
        "retrieved": retrieved,
        "recommendations": recommendations,
        "analysis": final_output
    }