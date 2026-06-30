import { useState } from "react";

export default function AfriAICommandConsole() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);

  const runCommand = async () => {
    try {
      const dock = window.__AFRII_DOCK__;
      if (!dock) throw new Error("Dock not available");

      const result = dock.execute(input);

      setLog(prev => [
        { cmd: input, result },
        ...prev
      ]);

      setInput("");
    } catch (e) {
      setLog(prev => [
        { cmd: input, error: e.message },
        ...prev
      ]);
    }
  };

  return (
    <div style={{ padding: 16, fontFamily: "monospace" }}>
      <h3>AFRAI COMMAND CONSOLE</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="type command..."
        style={{ width: "100%", padding: 8 }}
      />

      <button onClick={runCommand} style={{ marginTop: 8 }}>
        Execute
      </button>

      <div style={{ marginTop: 16 }}>
        {log.map((l, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <div>▶ {l.cmd}</div>
            {l.result && <div>✔ {JSON.stringify(l.result)}</div>}
            {l.error && <div>❌ {l.error}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
