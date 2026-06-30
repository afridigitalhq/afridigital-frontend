import React, { useEffect, useState } from "react";
import WorkflowStreamBridge from "./bridge/WorkflowStreamBridge";

const AfriAIWorkflowPanel = () => {
  const [workflows, setWorkflows] = useState({});

  useEffect(() => {
    WorkflowStreamBridge.subscribe((event) => {
      setWorkflows((prev) => {
        const updated = { ...prev };

        const key = event.payload?.step || "meta";

        if (!updated[key]) {
          updated[key] = [];
        }

        updated[key].push(event);

        return { ...updated };
      });
    });
  }, []);

  const renderStep = (step, events) => {
    const latest = events[events.length - 1];

    return (
      <div
        key={step}
        style={{
          marginBottom: 10,
          padding: 10,
          border: "1px solid #333",
          borderRadius: 6
        }}
      >
        <div style={{ fontWeight: "bold" }}>
          Step {step}
        </div>

        <pre style={{ color: "#0f0", fontSize: 12 }}>
          {JSON.stringify(latest, null, 2)}
        </pre>
      </div>
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>🧠 Workflow Intelligence Dashboard</h3>

      {Object.keys(workflows)
        .sort((a, b) => Number(a) - Number(b))
        .map((step) => renderStep(step, workflows[step]))}
    </div>
  );
};

export default AfriAIWorkflowPanel;
