import React from "react";
import ControlRoomUI from "../ui/ControlRoomUI";
import EventConsole from "../ui/EventConsole";
import AfriAICommandBox from "../ui/AfriAICommandBox";

export default function DashboardCore() {
  return (
    <div className="dashboard-core">
      <ControlRoomUI />
      <EventConsole />
      <AfriAICommandBox />
    </div>
  );
}
