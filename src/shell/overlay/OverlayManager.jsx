import React from "react";
import AfriAIDock from "../../control-room/dock/AfriAIDock";

export default function OverlayManager() {
  return (
    <>
      <AfriAIDock />
      {/* Future global overlays:
          - WarRoomOverlay
          - NotificationOverlay
          - ApprovalOverlay
          - EmergencyOverlay
      */}
    </>
  );
}
