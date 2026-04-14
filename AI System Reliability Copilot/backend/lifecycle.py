def detect_lifecycle(text):
    t = text.lower()

    if "design" in t or "plan" in t:
        return "DESIGN"
    if "build" in t or "develop" in t:
        return "DEVELOPMENT"
    if "deploy" in t or "kubernetes" in t:
        return "DEPLOYMENT"
    return "RUNTIME"