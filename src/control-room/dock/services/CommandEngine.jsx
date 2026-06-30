import ModuleBridge from "../../integrations/ModuleBridge";
import ConversationMemory from "./ConversationMemory";
import VoiceRegistry from "./VoiceEngine";

const CommandEngine = {
  execute(command, context = {}) {
    ConversationMemory.add("user", command);

    const result = {
      id: Date.now(),
      command,
      context,
      voice: VoiceRegistry.getCurrentVoice(),
      status: "accepted",
      timestamp: new Date().toISOString()
    };

    ConversationMemory.add("assistant", `Command accepted: ${command}`);

    ConversationMemory.add("assistant",result);
    VoiceRegistry.speak(result);
    return result;
  }
};

export default CommandEngine;


CommandEngine.getCurrentModule=function(){
  return ModuleBridge.getCurrent();
};
