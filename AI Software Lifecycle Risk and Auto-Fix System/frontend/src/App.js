import { useState } from "react";
import { API } from "./api";

import Header from "./components/Header";
import InputPanel from "./components/InputPanel";
import ExampleCards from "./components/ExampleCards";
import Dashboard from "./components/Dashboard";

export default function App() {

  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {

    setLoading(true);

    const res = await fetch(`${API}/analyze`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ text: input })
    });

    const result = await res.json();
    setData(result);

    setLoading(false);
  };

  return (
    <div className="app">

      <Header />

      <InputPanel
        input={input}
        setInput={setInput}
        analyze={analyze}
      />

      <ExampleCards setInput={setInput} />

      {loading && (
        <div className="loading">
          🧠 AI is analyzing system architecture...
        </div>
      )}

      <Dashboard data={data} />

    </div>
  );
}