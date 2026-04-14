import os
from openai import OpenAI
from endee_client import EndeeClient
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


class RAGEngine:

    def __init__(self):
        self.db = EndeeClient()

    def generate(self, text, risks, retrieved, recommendations, severity):

        prompt = f"""
You are an Enterprise AI System Architect.

USER INPUT:
{text}

RISKS:
{risks}

SEVERITY:
{severity}

SIMILAR FAILURES:
{retrieved}

RECOMMENDATIONS:
{recommendations}

OUTPUT FORMAT:
- What will break
- Why it will break
- Severity explanation
- Fix priority steps
- Final architecture
"""

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )

        return response.choices[0].message.content