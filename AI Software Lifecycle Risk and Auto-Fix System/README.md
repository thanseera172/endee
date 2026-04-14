# 🧠🚀 AI Software Lifecycle Risk and Auto-Fix System

<p align="center">
  <img src="https://img.shields.io/badge/AI%20Reliability%20Engine-%F0%9F%A7%A0-blueviolet?style=for-the-badge&logo=databricks&logoColor=white" />
  <img src="https://img.shields.io/badge/Auto--Fix%20Architecture-%F0%9F%9A%80-orange?style=for-the-badge" />
</p>

<p align="center">
  <b>Analyze → Predict Risks → Fix Before Failure</b><br>
  <i>AI-powered system for building reliable, scalable, production-ready software</i>
</p>

---

## 🌟 Overview

**AI Software Lifecycle Risk and Auto-Fix System** is an intelligent AI platform that analyzes software systems across **all lifecycle phases**:

📌 Design → Development → Deployment → Runtime  

It enables **any user (student → enterprise)** to:

✔ Detect risks  
✔ Predict failures  
✔ Get step-by-step fixes  
✔ Improve system architecture  

---

## ✨ Key Features

🚀 Works for ALL users  
🧠 AI-powered system understanding  
⚠️ Real-world risk prediction  
🔄 Lifecycle phase detection  
🛠️ Auto-fix recommendations  
📊 Structured output  

---

## 🧰 Tech Stack

### 🎨 Frontend

<p>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-UI-blue?style=for-the-badge&logo=react"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS-Styling-purple?style=for-the-badge&logo=css3"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><img src="https://img.shields.io/badge/Fetch-API-green?style=for-the-badge"></a>
</p>

---

### ⚙️ Backend

<p>
  <a href="https://fastapi.tiangolo.com/"><img src="https://img.shields.io/badge/FastAPI-Backend-green?style=for-the-badge&logo=fastapi"></a>
  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-Core-blue?style=for-the-badge&logo=python"></a>
  <a href="#"><img src="https://img.shields.io/badge/RAG-AI%20Engine-orange?style=for-the-badge"></a>
  <a href="#"><img src="https://img.shields.io/badge/Endee-Vector%20DB-red?style=for-the-badge"></a>
</p>

---

### 🏗️ Infrastructure

<p>
  <a href="https://cmake.org/"><img src="https://img.shields.io/badge/CMake-Build-blue?style=for-the-badge"></a>
  <a href="https://visualstudio.microsoft.com/visual-cpp-build-tools/"><img src="https://img.shields.io/badge/MSVC-Compiler-purple?style=for-the-badge"></a>
</p>

---

## 🏗️ System Architecture
    ┌────────────────────┐
    │   🎨 Frontend UI   │
    │     (React)        │
    └─────────┬──────────┘
              ↓
    ┌────────────────────┐
    │   ⚙️ Backend API   │
    │     (FastAPI)      │
    └─────────┬──────────┘
              ↓
    ┌────────────────────┐
    │     🧠 RAG Engine  │
    └─────────┬──────────┘
              ↓
    ┌────────────────────┐
    │   📦 Endee DB      │
    │ (Vector Database)  │
    └─────────┬──────────┘
              ↓
    ┌────────────────────┐
    │ 🚀 AI Analysis     │
    │ Risk + Fix Engine  │
    └────────────────────┘

    
---

## 🔄 How It Works

1️⃣ User enters system description  
2️⃣ Backend processes request  
3️⃣ RAG converts input → embeddings  
4️⃣ Endee retrieves similar patterns  
5️⃣ AI generates:
   - ⚠️ Risks  
   - 💥 Failures  
   - 🛠️ Fixes  
6️⃣ Frontend displays results  

---

## 📁 Project Structure

project-root/
│
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ ├── api.js
│ │ ├── styles.css
│ │
│ ├── components/
│ │ ├── Header.js
│ │ ├── InputPanel.js
│ │ ├── ExampleCards.js
│ │ ├── Dashboard.js
│ │
│ ├── .env
│ ├── .env.example
│
├── backend/
│ ├── main.py
│ ├── rag_engine.py
│ ├── endee_client.py
│ ├── lifecycle.py
│ ├── risk_engine.py
│ ├── recommendation.py
│ ├── severity_engine.py
│ ├── seed_data.json
│ ├── .env
│ ├── .env.example
│ ├── requirements.txt
│
├── endee/
│ ├── src/
│ ├── install.sh
│ ├── run.sh
│ ├── CMakeLists.txt
│
└── README.md



---

## 🧠 Use of Endee

Endee is the **core vector database** powering the AI system.

### 🔥 Responsibilities

✔ Store system patterns  
✔ Store failure cases  
✔ Enable semantic search  
✔ Support RAG  

---

### ⚙️ Workflow

Input → Embedding → Endee Search → Context → AI Output


---

## ⚙️ Setup Instructions

---

### 🔹 1. Clone Repository

```bash
git clone <your-repo-link>
cd endee

🔹 2. Build Endee
cd endee/endee

mkdir build
cd build

cmake ..
cmake --build .

▶ Run Endee
cd ..
bash run.sh

🔹 3. Backend Setup
cd backend

pip install -r requirements.txt
uvicorn main:app --reload

📍https://localhost:8000

🔹 4. Frontend Setup
cd frontend

npm install
npm start

📍https://localhost:3000

🔐 Environment Variables
Backend .env
ENDEE_URL=http://localhost:port
OPENAI_API_KEY=your_key
Frontend .env
REACT_APP_API_URL=http://localhost:8000
🧪 Example
Input
I built a food delivery app using Firebase, Stripe, and OpenAI API
Output
⚠️ Risks

Firebase failure

Stripe downtime

OpenAI API failure

🔄 Lifecycle

Deployment

🛠️ Fixes

Add fallback authentication

Add backup payment

Add AI fallback

🎯 Evaluation Coverage
✔ Endee vector database
✔ RAG implementation
✔ Real-world use case
✔ Full-stack system
✔ Clean architecture
✔ Professional documentation

🌍 Impact
👤 User	🚀 Benefit
🎓 Students	Fix project mistakes
👨‍💻 Developers	Prevent failures
🚀 Startups	Build scalable systems
🏢 Enterprises	Improve reliability
