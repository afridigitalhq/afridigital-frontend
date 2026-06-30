import React, { useEffect, useState } from "react";
import AfriAIEventStream from "../../events/AfriAIEventStream";

/**
 * 🧠 LIVE AfriAI Thought Stream
 */

const AfriAIThoughtStream = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    AfriAIEventStream.subscribe((event) => {
      setThoughts((prev) => [
        {
          time: new Date().toLocaleTimeString(),
          ...event
        },
        ...prev
      ]);
    });
  }, []);

  return (
    <div style={{ padding: 12, border: "1px solid #333", background: "#111" }}>
      <h4>🧠 Thought Stream (Live)</h4>

      <div style={{ maxHeight: 200, overflow: "auto", fontSize: 12 }}>
        {thoughts.map((t, i) => (
          <div key={i} style={{ marginBottom: 6, opacity: 0.85 }}>
            <span style={{ color: "#00ffcc" }}>{t.time}</span> —{" "}
            {t.type || "event"} / {t.module || "unknown"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AfriAIThoughtStream;
