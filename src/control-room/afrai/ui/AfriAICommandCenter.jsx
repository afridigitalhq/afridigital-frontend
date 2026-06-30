import React, { useState } from "react";
import AfriAIInterface from "../governed/AfriAIInterface";
import EventStream from "../../bridge/EventStream";

const AfriAICommandCenter = () => {
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);

  const sendCommand = () => {
    const response = AfriAIInterface.ask(input);

    const entry = {
      input,
      response,
      timestamp: Date.now()
    };

    setLog((prev) => [...prev, entry]);

    EventStream.emit({
      type: "AFRAI_UI_COMMAND",
      payload: entry
    });

    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>AfriAI Command Center</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter system command..."
        style={{ width: "60%", padding: 10 }}
      />

      <button onClick={sendCommand} style={{ marginLeft: 10 }}>
        Execute
      </button>

      <div style={{ marginTop: 20 }}>
        {log.map((item, idx) => (
          <div key={idx} style={{ marginBottom: 10 }}>
            <b>Input:</b> {item.input} <br />
            <b>Response:</b> {JSON.stringify(item.response)} <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AfriAICommandCenter;
