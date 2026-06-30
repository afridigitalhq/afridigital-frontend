import React from "react";
import CommandEngine from "./services/CommandEngine";
import ConversationMemory from "./services/ConversationMemory";
import VoiceRegistry from "./services/VoiceEngine";
import NotificationEngine from "./services/NotificationEngine";

export default function AfriAIDock() {
  const status = {
    voice: VoiceRegistry.getCurrentVoice(),
    history: ConversationMemory.latest().length,
    notifications: NotificationEngine.all().length
  };

  console.log("🧠 AfriAI Dock Ready", status, CommandEngine);

  return (
    <aside id="afriai-global-dock" aria-label="AfriAI Global Dock">
      {/* Global AfriAI Dock
          Bottom-right overlay
          Command input
          Conversation
          Voice
          Narrator settings
          Context-aware execution
      */}
    </aside>
  );
}
