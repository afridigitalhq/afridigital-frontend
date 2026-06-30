const VoiceRegistry = {
  defaultVoice: "afriai-default",
  currentVoice: "afriai-default",
  voices: [
    { id: "afriai-default", label: "AfriAI Default" },
    { id: "female", label: "Female" },
    { id: "male", label: "Male" }
  ],

  getVoices() {
    return this.voices;
  },

  getCurrentVoice() {
    return this.currentVoice;
  },

  setCurrentVoice(id) {
    if (this.voices.find(v => v.id === id)) {
      this.currentVoice = id;
    }
    return this.currentVoice;
  }
};

export default VoiceRegistry;


VoiceRegistry.speak = function(text){
  console.log("🗣️ AfriAI:", text);
  if(typeof window!=="undefined" && "speechSynthesis" in window){
    const u=new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(u);
  }
};
