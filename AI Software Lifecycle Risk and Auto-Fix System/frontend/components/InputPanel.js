export default function InputPanel({ input, setInput, analyze }) {
  return (
    <div className="inputBox">

      <textarea
        placeholder="Describe your system (e.g. I built a fintech app using Stripe + Firebase)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={analyze}>
        🚀 Analyze System
      </button>

    </div>
  );
}