import { useState, useEffect } from "react";

export default function AfriAIDevOpsPanel() {
  const [state, setState] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const feed = window.__AFRII_FEED__ || [];
      const dock = window.__AFRII_DOCK__;

      setState({
        feedCount: feed.length,
        dockReady: !!dock,
        lastEvent: feed[feed.length - 1] || null
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 16, fontFamily: "monospace" }}>
      <h3>AFRAI DEVOPS PANEL</h3>

      <div>
        <p>Dock Status: {state.dockReady ? "ACTIVE" : "OFFLINE"}</p>
        <p>Event Count: {state.feedCount || 0}</p>

        <div style={{ marginTop: 12 }}>
          <strong>Last Event:</strong>
          <pre>
            {JSON.stringify(state.lastEvent, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
