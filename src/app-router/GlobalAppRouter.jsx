import React from "react";
import ControlRoomLauncher from "../control-room/orchestration/ControlRoomLauncher";

function Landing() {
  return <h1>AfriDigital Landing</h1>;
}

function Auth() {
  return <h1>Auth Page</h1>;
}

function UserApp() {
  return <h1>Main User App</h1>;
}

function AdminApp() {
  React.useEffect(() => {
    ControlRoomLauncher.launch();
  }, []);

  return <h1>Control Room Active</h1>;
}

export default function GlobalAppRouter() {
  const role = "admin"; // placeholder (later: real auth system)

  if (role === "guest") return <Landing />;
  if (role === "auth") return <Auth />;
  if (role === "user") return <UserApp />;
  if (role === "admin") return <AdminApp />;

  return <Landing />;
}
