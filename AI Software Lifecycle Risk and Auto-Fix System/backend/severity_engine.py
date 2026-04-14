def calculate_severity(risks):

    score = 0

    for r in risks:
        r = r.lower()

        if "firebase" in r:
            score += 30
        if "api" in r:
            score += 25
        if "database" in r:
            score += 20
        if "payment" in r:
            score += 35

    if score > 80:
        level = "CRITICAL"
    elif score > 50:
        level = "HIGH"
    elif score > 20:
        level = "MEDIUM"
    else:
        level = "LOW"

    return {
        "score": min(score, 100),
        "level": level
    }