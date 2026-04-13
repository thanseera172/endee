from endee_client import EndeeClient
import json

db = EndeeClient()

with open("../data/seed_data.json") as f:
    data = json.load(f)

for item in data:
    db.add(item["text"], {"tag": item["tag"]})