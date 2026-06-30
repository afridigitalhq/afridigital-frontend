import React, { useEffect, useState } from "react";

/**
 * 🌊 Execution Flow Animator
 * Visualizes AI decision flow across ecosystem layers
 */

const ExecutionFlowAnimator = ({ events = [] }) => {
  const [activeFlow, setActiveFlow] = useState(null);

  useEffect(() => {
    if (events.length === 0) return;

    const latest = events[events.length - 1];
    setActiveFlow(latest);

    const timer = setTimeout(() => setActiveFlow(null), 2000);
    return () => clearTimeout(timer);
  }, [events]);

  return (
    <div style={{ padding: 20, color: "#fff" }}>
      <h2>🌊 AfriDigital Execution Flow</h2>

      <div style={{ marginTop: 20 }}>
        <FlowStep
          label="AI INTENT"
          active={activeFlow?.stage === "intent"}
        />
        <FlowStep
          label="DECISION ENGINE"
          active={activeFlow?.stage === "decision"}
        />
        <FlowStep
          label="POLICY CHECK"
          active={activeFlow?.stage === "policy"}
        />
        <FlowStep
          label="APPROVAL GATE"
          active={activeFlow?.stage === "approval"}
        />
        <FlowStep
          label="EXECUTION"
          active={activeFlow?.stage === "execution"}
        />
        <FlowStep
          label="AUDIT + ROLLBACK"
          active={activeFlow?.stage === "audit"}
        />
        <FlowStep
          label="SOC OBSERVATION"
          active={activeFlow?.stage === "soc"}
        />
      </div>

      {activeFlow && (
        <div style={{ marginTop: 20, fontSize: 12, opacity: 0.7 }}>
          Active Module: {activeFlow.module || "N/A"}
        </div>
      )}
    </div>
  );
};

const FlowStep = ({ label, active }) => {
  return (
    <div
      style={{
        padding: 10,
        marginBottom: 8,
        border: "1px solid #333",
        background: active ? "#00ffcc22" : "#111",
        borderLeft: active ? "4px solid #00ffcc" : "4px solid #333"
      }}
    >
      {label}
    </div>
  );
};

export default ExecutionFlowAnimator;
