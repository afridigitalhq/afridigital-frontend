import React, { useEffect, useState } from "react";

export default function CommandDock() {
  const [events, setEvents] = useState([]);
  const [insights, setInsights] = useState(null);
  const [health, setHealth] = useState(null);

  useEffect(() => {
    // placeholder live simulation (we’ll wire real runtime next step)
    setEvents([
      { type: "boot", status: "ok" },
      { type: "run", module: "dashboard" },
      { type: "deploy", platform: "render" }
    ]);

    setInsights({
      totalCommands: 10,
      boot: 3,
      run: 3,
      deploy: 3,
      health: 1
    });

    setHealth("healthy");
  }, []);

  return (
    <div className="w-full h-screen bg-black text-green-400 p-4 font-mono grid grid-cols-3 gap-4">

      {/* LEFT PANEL: EVENTS */}
      <div className="border border-green-600 p-3">
        <h2 className="text-white mb-2">EVENT STREAM</h2>
        {events.map((e, i) => (
          <div key={i}>
            [{e.type}] {e.module || e.platform || e.status}
          </div>
        ))}
      </div>

      {/* CENTER PANEL: INSIGHTS */}
      <div className="border border-green-600 p-3">
        <h2 className="text-white mb-2">INSIGHTS</h2>
        {insights && (
          <>
            <div>Total: {insights.totalCommands}</div>
            <div>Boot: {insights.boot}</div>
            <div>Run: {insights.run}</div>
            <div>Deploy: {insights.deploy}</div>
            <div>Health Checks: {insights.health}</div>
          </>
        )}
      </div>

      {/* RIGHT PANEL: SYSTEM STATUS */}
      <div className="border border-green-600 p-3">
        <h2 className="text-white mb-2">SYSTEM STATUS</h2>
        <div>{health}</div>
      </div>

    </div>
  );
}
