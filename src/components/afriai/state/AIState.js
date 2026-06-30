export const AI_STATUS = Object.freeze({
  ONLINE: "online",
  LISTENING: "listening",
  THINKING: "thinking",
  RESPONDING: "responding",
  OFFLINE: "offline",
  ERROR: "error"
});

export const initialAIState = {
  status: AI_STATUS.ONLINE,
  activeModule: "AfriSports",
  input: "",
  listening: false,
  speaking: false,
  processing: false,
  connected: true,
  historyOpen: false,
  waveformActive: false,
  lastCommand: null,
  lastResponse: null
};
