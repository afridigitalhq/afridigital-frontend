import AfriDigitalKernel from "../core/AfriDigitalKernel";
import ModuleLauncher from "../ecosystem/ModuleLauncher";
import CommandEngine from "../dock/services/CommandEngine";
import VoiceRegistry from "../dock/services/VoiceEngine";
import NotificationEngine from "../dock/services/NotificationEngine";
import ConversationMemory from "../dock/services/ConversationMemory";

export function bootstrapControlRoom() {
  const runtime = {
    kernel: AfriDigitalKernel,
    launcher: ModuleLauncher,
    commands: CommandEngine,
    voice: VoiceRegistry,
    notifications: NotificationEngine,
    memory: ConversationMemory
  };

  if (typeof window !== "undefined") {
    window.__AFRIDIGITAL_RUNTIME__ = runtime;
  }

  console.log("🚀 AfriDigital Runtime Bootstrapped");

  return runtime;
}

export default bootstrapControlRoom;
