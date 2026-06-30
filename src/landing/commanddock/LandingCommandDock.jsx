import React from "react";
import UniversalCommandDock from "../../shell/commanddock/components/UniversalCommandDock";

export default function LandingCommandDock() {
  return (
    <UniversalCommandDock
      mode="guest"
      allowNotifications={true}
      allowVoice={false}
      allowMemory={false}
      allowMutation={false}
      onboarding={true}
    />
  );
}
