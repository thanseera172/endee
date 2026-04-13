import requests

ENDEE_URL = "http://localhost:8000"


class EndeeClient:

    def add(self, text, metadata=None):
        return requests.post(
            f"{ENDEE_URL}/add",
            json={
                "text": text,
                "metadata": metadata or {}
            }
        ).json()

    def search(self, query):
        return requests.post(
            f"{ENDEE_URL}/search",
            json={
                "query": query,
                "top_k": 5
            }
        ).json()