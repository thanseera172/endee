import requests
import os

ENDEE_URL = os.getenv("ENDEE_URL")


class EndeeClient:

    def search(self, query):
        try:
            res = requests.post(
                f"{ENDEE_URL}/search",
                json={"query": query, "top_k": 5}
            )
            return res.json()
        except:
            return {"results": []}