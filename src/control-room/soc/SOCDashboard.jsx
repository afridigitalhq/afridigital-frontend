import React from "react";
import EventStream from "../bridge/EventStream";
import ExecutionTrace from "../afrai/ExecutionTrace";

export default function SOCDashboard() {
  const [events, setEvents] = React.useState([]);
  const [trace, setTrace] = React.useState([]);

  React.useEffect(() => {
    EventStream.on((event) => {
      setEvents((prev) => [...prev, event]);
    });

    const interval = setInterval(() => {
      setTrace(ExecutionTrace.getAll());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>SOC Dashboard</h2>

      <h3>Live Events</h3>
      <pre>{JSON.stringify(events, null, 2)}</pre>

      <h3>Execution Trace</h3>
      <pre>{JSON.stringify(trace, null, 2)}</pre>
    </div>
  );
}
