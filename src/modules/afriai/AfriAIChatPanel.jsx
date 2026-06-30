import { useEffect, useRef, useState } from "react";

export default function AfriAIChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:3000/ws/afriai");

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prev) => [...prev, data]);
      } catch (e) {
        setMessages((prev) => [...prev, { type: "raw", reply: event.data }]);
      }
    };

    ws.current.onerror = () => {
      setMessages((prev) => [...prev, { type: "system", reply: "WS connection error" }]);
    };

    return () => ws.current?.close();
  }, []);

  const sendMessage = () => {
    if (!input.trim() || !ws.current) return;

    ws.current.send(input);

    setMessages((prev) => [
      ...prev,
      { type: "user", reply: input }
    ]);

    setInput("");
  };

  return (
    <div style={{ padding: 20, color: "#0ff", background: "#000", height: "100vh" }}>
      <h2>🧠 AfriAI Control Panel</h2>

      <div style={{ height: 320, overflow: "auto", border: "1px solid #0ff", padding: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 6 }}>
            <b style={{ color: "#0ff" }}>{m.type || "afriai"}:</b>{" "}
            <span style={{ color: "#fff" }}>{m.reply || m.input}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "80%",
            padding: 10,
            background: "#111",
            color: "#0ff",
            border: "1px solid #0ff"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "10px 15px",
            background: "#0ff",
            color: "#000",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
