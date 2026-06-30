import VoicePipeline from "../voice/VoicePipeline";
import { sendCommand } from "../api/AfriAIClient";
import { resolveModule } from "../modules/ModuleResolver";
import AIStateManager from "../state/AIStateManager";

import CommandEngine from "../../../control-room/dock/services/CommandEngine";
import ConversationMemory from "../../../control-room/dock/services/ConversationMemory";

const voice = new VoicePipeline();

export async function startListening() {
  AIStateManager.setState({ status: "listening", listening: true });
  voice.start();
}

export function stopListening() {
  voice.stop();
  AIStateManager.setState({ status: "online", listening: false });
}

export async function submitCommand(command) {
  const module = resolveModule();

  AIStateManager.setState({
    status: "thinking",
    processing: true,
    lastCommand: command,
    activeModule: module
  });

  CommandEngine.execute(command, { module });

  try {
    const response = await sendCommand({
      module,
      command
    });

    ConversationMemory.add("assistant", response);

    AIStateManager.setState({
      status: "responding",
      processing: false,
      lastResponse: response
    });

    return response;
  } catch (err) {
    ConversationMemory.add("system", err.message || "Command failed");

    AIStateManager.setState({
      status: "error",
      processing: false
    });

    throw err;
  }
}

export function syncModule() {
  AIStateManager.setState({
    activeModule: resolveModule()
  });
}

export function getHistory() {
  return ConversationMemory.all();
}
