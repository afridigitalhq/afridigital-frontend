import React from "react";

const AfriAIExecutionFeed = ({ events = [] }) => {
  return (
    <div>
      <h3>Execution Feed</h3>
      {events.map((e, i) => (
        <div key={i}>
          <pre>{JSON.stringify(e, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default AfriAIExecutionFeed;
