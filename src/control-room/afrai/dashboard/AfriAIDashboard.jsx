import React from "react";
import AfriAIThoughtStream from "./components/AfriAIThoughtStream";
import AfriAIDecisionTimeline from "./components/AfriAIDecisionTimeline";
import AfriAIIntentAnalyzer from "./components/AfriAIIntentAnalyzer";
import AfriAIExecutionMap from "./components/AfriAIExecutionMap";

/**
 * 🧠 AfriAI Dashboard
 * Intelligence introspection cockpit (NOT SOC)
 */

const AfriAIDashboard = () => {
  return (
    <div style={{ padding: 20, color: "#fff" }}>
      <h2>🧠 AfriAI Intelligence Dashboard</h2>

      <div style={{ display: "grid", gap: 20 }}>
        <AfriAIThoughtStream />
        <AfriAIDecisionTimeline />
        <AfriAIIntentAnalyzer />
        <AfriAIExecutionMap />
      </div>
    </div>
  );
};

export default AfriAIDashboard;
