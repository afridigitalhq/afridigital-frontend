import React, { useEffect, useState } from "react";
import AfriAIEcosystemExecutor from "../../afrai/ecosystem/AfriAIEcosystemExecutor";

/**
 * 🌍 Live Ecosystem Map
 * Real-time visualization of ALL modules + execution state
 */

const EcosystemLiveMap = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setModules(AfriAIEcosystemExecutor.discoverModules());
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const grouped = AfriAIEcosystemExecutor.groupByDomain?.() || {};

  return (
    <div style={{ padding: 20, color: "#fff" }}>
      <h2>🌍 AfriDigital Ecosystem Live Map</h2>

      {Object.keys(grouped).map((domain) => (
        <div
          key={domain}
          style={{
            marginBottom: 20,
            border: "1px solid #333",
            padding: 10
          }}
        >
          <h3>📡 {domain}</h3>

          {grouped[domain].map((m) => (
            <div
              key={m.module}
              style={{
                padding: 6,
                marginTop: 5,
                background: "#111",
                borderLeft: "3px solid #00ffcc"
              }}
            >
              <div><b>{m.module}</b></div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                Status: {m.status}
              </div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                Capabilities: {(m.capabilities || []).join(", ")}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EcosystemLiveMap;
