import React from "react";
import CommandRouter from "../afrai/CommandRouter";
import EventStream from "../bridge/EventStream";

export default function AfriAICommandBox() {
  const [cmd, setCmd] = React.useState("");
  const [log, setLog] = React.useState([]);

  const send = () => {
    const result = CommandRouter.send(cmd);

    EventStream.emit({
      type: "UI_COMMAND_EXECUTED",
      input: cmd,
      result
    });

    setLog((prev) => [...prev, { cmd, result }]);
    setCmd("");
  };

  return (
    <div>
      <input
        value={cmd}
        onChange={(e) => setCmd(e.target.value)}
        placeholder="Enter AfriAI command"
      />
      <button onClick={send}>Send</button>

      <div style={{ marginTop: 10 }}>
        <h4>Command Log</h4>
        <pre>{JSON.stringify(log, null, 2)}</pre>
      </div>
    </div>
  );
}
