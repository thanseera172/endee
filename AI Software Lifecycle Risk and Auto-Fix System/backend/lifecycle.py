def detect_lifecycle(text: str):

    t = text.lower()

    # DESIGN PHASE
    if any(word in t for word in ["design", "plan", "architecture", "system design"]):
        return {
            "phase": "DESIGN",
            "risk_focus": "wrong architecture decisions"
        }

    # DEVELOPMENT PHASE
    if any(word in t for word in ["build", "develop", "coding", "implementation"]):
        return {
            "phase": "DEVELOPMENT",
            "risk_focus": "bad dependencies or logic errors"
        }

    # DEPLOYMENT PHASE
    if any(word in t for word in ["deploy", "docker", "kubernetes", "release"]):
        return {
            "phase": "DEPLOYMENT",
            "risk_focus": "scaling + infra failures"
        }

    # RUNTIME PHASE
    return {
        "phase": "RUNTIME",
        "risk_focus": "live system crashes, API failures"
    }