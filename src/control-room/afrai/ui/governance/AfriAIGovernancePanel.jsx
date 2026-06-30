import React, { useEffect, useState } from "react";
import AfriAIApprovalGate from "../../approval/AfriAIApprovalGate";
import AfriAIRollbackEngine from "../../rollback/AfriAIRollbackEngine";

const AfriAIGovernancePanel = () => {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueue([...AfriAIApprovalGate.getQueue()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const approve = (id) => {
    AfriAIApprovalGate.approve(id);
    setQueue([...AfriAIApprovalGate.getQueue()]);
  };

  const reject = (id) => {
    AfriAIApprovalGate.reject(id);
    setQueue([...AfriAIApprovalGate.getQueue()]);
  };

  const rollback = (id) => {
    AfriAIRollbackEngine.rollback(id);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🛡 AfriAI Governance Control Room</h2>

      {queue.length === 0 && (
        <p>No pending AI executions.</p>
      )}

      {queue.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #333",
            padding: 12,
            marginBottom: 10
          }}
        >
          <div><b>Module:</b> {item.execution?.module}</div>
          <div><b>Action:</b> {item.execution?.action}</div>
          <div><b>Status:</b> {item.status}</div>
          <div><b>Risk:</b> {item.execution?.policy?.risk}</div>

          <div style={{ marginTop: 10 }}>
            <button onClick={() => approve(item.id)}>
              Approve
            </button>

            <button onClick={() => reject(item.id)} style={{ marginLeft: 10 }}>
              Reject
            </button>

            <button onClick={() => rollback(item.id)} style={{ marginLeft: 10 }}>
              Rollback
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AfriAIGovernancePanel;
