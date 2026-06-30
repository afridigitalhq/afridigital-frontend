import React, { useState } from "react";
import CommandEngine from "../../../control-room/dock/services/CommandEngine";

export default function CommandInput() {
  const [command, setCommand] = useState("");

  const submit = () => {
    const text = command.trim();
    if (!text) return;

    CommandEngine.execute(text);
    setCommand("");
  };

  return (
    <input
      className="afriai-global-command-input"
      value={command}
      onChange={(e)=>setCommand(e.target.value)}
      onKeyDown={(e)=>e.key==="Enter" && submit()}
      placeholder="Ask AfriAI anything across AfriDigital..."
    />
  );
}
