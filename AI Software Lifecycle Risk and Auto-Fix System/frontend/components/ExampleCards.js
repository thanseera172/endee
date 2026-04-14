export default function ExampleCards({ setInput }) {

  const examples = [
    "I built fintech app using Stripe",
    "I deployed microservices on Kubernetes",
    "I used Firebase backend for SaaS",
    "I built food delivery system using APIs",
    "I built banking system with distributed architecture"
  ];

  return (
    <div className="examples">

      <h3>💡 Try Examples</h3>

      {examples.map((ex, i) => (
        <button key={i} onClick={() => setInput(ex)}>
          {ex}
        </button>
      ))}

    </div>
  );
}