from fastapi import FastAPI
from lifecycle import detect_lifecycle
from risk_engine import detect_risks
from rag_engine import RAGEngine

app = FastAPI()
engine = RAGEngine()

@app.post("/analyze")
def analyze(data: dict):

    text = data["text"]

    phase = detect_lifecycle(text)
    risks = detect_risks(text)
    result = engine.generate(text, risks)

    return {
        "phase": phase,
        "risks": risks,
        "analysis": result
    }