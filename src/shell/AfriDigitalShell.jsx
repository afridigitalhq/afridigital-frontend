import React from "react";

import ShellProvider from "./providers/ShellProvider";
import ShellHeader from "./layout/ShellHeader";
import ShellSidebar from "./layout/ShellSidebar";
import ModuleWorkspace from "./workspace/ModuleWorkspace";
import OverlayManager from "./overlay/OverlayManager";
import GlobalHUD from "./overlay/GlobalHUD";
import { UniversalCommandDock } from "./commanddock";

export default function AfriDigitalShell() {
  return (
    <ShellProvider>
      <div className="afridigital-shell">

        <ShellHeader />

        <div className="afridigital-shell-body">

          <ShellSidebar />

          <ModuleWorkspace />

        </div>

        <UniversalCommandDock />

        <OverlayManager />

        <GlobalHUD />

      </div>
    </ShellProvider>
  );
}
