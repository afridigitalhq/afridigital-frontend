import "./CommandBar.css";

export default function AfriAICommandBar() {
  return (
    <div className="afriai-command-bar">
      <div className="afriai-status">🟢 AfriAI</div>
      <button className="afriai-mic" title="Voice Command">🎤</button>
      <input
        className="afriai-input"
        type="text"
        placeholder="Ask AfriAI anything..."
      />
      <button className="afriai-send">➤</button>
      <div className="afriai-module">⚽ AfriSports</div>
      <button className="afriai-menu">☰</button>
    </div>
  );
}
