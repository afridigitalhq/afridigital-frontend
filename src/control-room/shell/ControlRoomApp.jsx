import Sidebar from "../sidebar/Sidebar";
import TopBar from "../topbar/TopBar";
import AfriAIDock from "../dock/AfriAIDock";
import SOCHome from "../soc/SOCHome";
import WarRoomOverlay from "../warroom/WarRoomOverlay";

export default function ControlRoomApp() {
  return (
    <div className="afridigital-control-room">
      <TopBar />
      <Sidebar />
      <main className="control-room-main">
        <SOCHome />
      </main>
      <AfriAIDock />
      <WarRoomOverlay />
    </div>
  );
}
