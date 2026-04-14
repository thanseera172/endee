export default function Dashboard({ data }) {

  if (!data) return null;

  const level = data.severity?.level;

  return (
    <div className="dashboard">

      {/* SUMMARY */}
      <div className="card blue">
        <h2>
          📊 System Risk Overview
          <span className={`badge ${level?.toLowerCase()}`}>
            {level}
          </span>
        </h2>

        <p><b>Score:</b> {data.severity?.score}/100</p>
      </div>

      {/* RISKS */}
      <div className="card red">
        <h3>⚠ Risk Analysis</h3>
        <ul>
          {data.risks?.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      {/* FIXES */}
      <div className="card green">
        <h3>💡 Fix Recommendations</h3>
        <ul>
          {data.recommendations?.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      {/* ENDEE */}
      <div className="card">
        <h3>📚 Similar System Failures (Endee)</h3>
        <pre>{JSON.stringify(data.retrieved, null, 2)}</pre>
      </div>

      {/* AI OUTPUT */}
      <div className="card purple">
        <h3>🧠 AI Architecture Analysis</h3>
        <pre>{data.analysis}</pre>
      </div>

    </div>
  );
}