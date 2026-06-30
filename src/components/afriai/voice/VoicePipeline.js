import VoiceRegistry from "../../../control-room/dock/services/VoiceEngine";

export default class VoicePipeline {
  start() {
    VoiceRegistry.startListening();
  }

  stop() {
    VoiceRegistry.stopListening();
  }

  current() {
    return VoiceRegistry.currentVoice();
  }

  voices() {
    return VoiceRegistry.listVoices();
  }

  setVoice(id) {
    VoiceRegistry.setCurrentVoice(id);
  }
}
