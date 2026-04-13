from endee_client import EndeeClient
import openai

class RAGEngine:

    def __init__(self):
        self.db = EndeeClient()

    def generate(self, user_input, risks):

        retrieved = self.db.search(user_input)

        prompt = f"""
You are a senior system architect AI.

USER INPUT:
{user_input}

DETECTED RISKS:
{risks}

SIMILAR FAILURES (Endee Vector DB):
{retrieved}

TASK:
1. Explain risks simply
2. Predict real-world failures
3. Show impact
4. Give step-by-step fixes
5. Provide final production architecture
"""

        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )

        return response["choices"][0]["message"]["content"]