def detect_risks(text):

    t = text.lower()
    risks = []

    if "firebase" in t:
        risks.append("Firebase single backend dependency risk")

    if "stripe" in t:
        risks.append("Payment gateway failure risk")

    if "api" in t:
        risks.append("External API dependency risk")

    if "database" in t:
        risks.append("Scaling & data loss risk")

    return risks