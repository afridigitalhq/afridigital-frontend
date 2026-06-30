import React from "react";

/**
 * 🧠 AfriAI Sidebar Entry
 */

const AfriAISection = ({ onSelect }) => {
  return (
    <div style={{ padding: 10, cursor: "pointer" }} onClick={() => onSelect("afrai")}>
      🧠 AfriAI Intelligence
    </div>
  );
};

export default AfriAISection;
