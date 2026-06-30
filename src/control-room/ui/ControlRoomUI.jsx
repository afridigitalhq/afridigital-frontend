import React from "react";
import ControlRoomRuntime from "../runtime/ControlRoomRuntime";

export default function ControlRoomUI() {
  React.useEffect(() => {
    ControlRoomRuntime.init();
  }, []);

  return (
    <div className="control-room-ui">
      <h1>Control Room Active</h1>
      <p>System Runtime Connected</p>
    </div>
  );
}
