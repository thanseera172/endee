def recommend(risks):

    rec = []

    for r in risks:
        r = r.lower()

        if "firebase" in r:
            rec.append("Add PostgreSQL backup system")
        if "api" in r:
            rec.append("Add retry + caching layer")
        if "database" in r:
            rec.append("Use replication + load balancing")

    return rec