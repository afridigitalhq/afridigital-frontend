import React from "react";
import CommandInput from "./CommandInput";
import { NotificationCenter } from "../notifications";
import { useNotifications } from "../notifications";
import ConnectionIndicator from "./ConnectionIndicator";
import NotificationBadge from "./NotificationBadge";
import VoiceButton from "./VoiceButton";

export default function UniversalCommandDock(){
const { count } = useNotifications();
  return (
    <div className="afriai-command-dock">
      <ConnectionIndicator />
      <CommandInput />
      <VoiceButton />
      <NotificationBadge />
    <NotificationCenter />
</div>
  );
}
