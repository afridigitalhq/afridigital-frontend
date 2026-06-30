import { useEffect, useState } from "react";

export default function AfriAILiveFeed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const stream = window.__AFRII_FEED__ || [];
      setFeed([...stream]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 16, fontFamily: "monospace" }}>
      <h3>AFRAI LIVE FEED</h3>

      <div>
        {feed.slice().reverse().map((item, i) => (
          <div key={i} style={{ marginBottom: 6 }}>
            <div>▶ {item.command}</div>
            <div>status: {item.status}</div>
            {item.executionId && (
              <div>id: {item.executionId}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
