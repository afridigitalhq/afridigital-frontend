import React from "react";
import EventStream from "../bridge/EventStream";

export default function EventConsole() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    EventStream.on((event) => {
      setEvents((prev) => [...prev, event]);
    });
  }, []);

  return (
    <div>
      <h3>Event Console</h3>
      <pre>{JSON.stringify(events, null, 2)}</pre>
    </div>
  );
}
