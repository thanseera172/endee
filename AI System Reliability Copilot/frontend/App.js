import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const examples = [
    "I built an e-commerce app using Firebase and Stripe",
    "I am deploying a chatbot using OpenAI API",
    "I built a banking system using microservices",
    "I created a food delivery app with APIs and cloud backend",
    "I built a SaaS startup using AWS and PostgreSQL"
  ];

  const analyze = async () => {
    if (!input.trim()) {
      setError("Please enter a system description");
      return;
    }

    setError("");
    setLoading(true);
    setData(null);

    try {
      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input })
      });

      if (!res.ok) throw new Error("Server error");

      const result = await res.json();
      setData(result);

    } catch (err) {
      setError("Backend not reachable. Start server at localhost:8000");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2>🧠 AI Copilot</h2>
        <p style={{ fontSize: 12, opacity: 0.7 }}>
          Analyze system risks before deployment
        </p>

        <h4>💡 Examples</h4>

        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => setInput(ex)}
            style={styles.exampleBtn}
          >
            {ex}
          </button>
        ))}
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1>🧠 System Reliability Copilot</h1>
          <p>Endee-powered AI for system design risk analysis</p>
        </div>

        {/* INPUT BOX */}
        <div style={styles.inputBox}>

          <textarea
            rows="5"
            style={styles.textarea}
            placeholder="Describe your system (startup / student project / enterprise)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={analyze} style={styles.button}>
            🚀 Analyze System
          </button>

          {error && <p style={styles.error}>{error}</p>}
        </div>

        {/* LOADING */}
        {loading && (
          <div style={styles.card}>
            <p>🧠 Running Endee semantic search...</p>
            <p>⚡ Detecting system risks...</p>
            <p>🔄 Generating architecture fixes...</p>
          </div>
        )}

        {/* EMPTY STATE */}
        {!data && !loading && (
          <div style={styles.empty}>
            <h3>📊 Awaiting System Input</h3>
            <p>Enter a system design to analyze risks & architecture</p>
          </div>
        )}

        {/* OUTPUT */}
        {data && (
          <div style={{ marginTop: 20 }}>

            {/* LIFECYCLE */}
            <div style={styles.cardBlue}>
              <h3>🔄 Lifecycle Phase</h3>
              <p>{data.phase}</p>
            </div>

            {/* RISKS */}
            <div style={styles.cardRed}>
              <h3>⚠️ Risk Analysis</h3>
              <ul>
                {data.risks.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* AI OUTPUT */}
            <div style={styles.cardGreen}>
              <h3>🧠 AI System Analysis</h3>

              <pre style={styles.output}>
                {data.analysis}
              </pre>

              <button
                onClick={() => navigator.clipboard.writeText(data.analysis)}
                style={styles.copyBtn}
              >
                📋 Copy Analysis
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    display: "flex",
    fontFamily: "Arial",
    height: "100vh",
    background: "#0b1220",
    color: "white"
  },

  sidebar: {
    width: "25%",
    padding: 20,
    borderRight: "1px solid #1f2937",
    background: "#0f172a"
  },

  main: {
    width: "75%",
    padding: 25,
    overflowY: "auto"
  },

  header: {
    marginBottom: 20
  },

  inputBox: {
    background: "#111827",
    padding: 15,
    borderRadius: 10,
    border: "1px solid #1f2937"
  },

  textarea: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    border: "none",
    outline: "none"
  },

  button: {
    marginTop: 10,
    width: "100%",
    padding: 12,
    background: "#3b82f6",
    border: "none",
    borderRadius: 8,
    fontWeight: "bold",
    cursor: "pointer"
  },

  exampleBtn: {
    width: "100%",
    marginBottom: 8,
    padding: 8,
    fontSize: 12,
    borderRadius: 6,
    border: "none",
    cursor: "pointer"
  },

  card: {
    marginTop: 20,
    padding: 15,
    background: "#1f2937",
    borderRadius: 10
  },

  cardBlue: {
    background: "#1e3a8a",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  cardRed: {
    background: "#7f1d1d",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  cardGreen: {
    background: "#14532d",
    padding: 15,
    borderRadius: 10
  },

  output: {
    whiteSpace: "pre-wrap",
    fontSize: 13,
    marginTop: 10
  },

  copyBtn: {
    marginTop: 10,
    padding: 8,
    background: "#22c55e",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  },

  error: {
    color: "#f87171",
    marginTop: 10
  },

  empty: {
    marginTop: 50,
    textAlign: "center",
    opacity: 0.6
  }
};