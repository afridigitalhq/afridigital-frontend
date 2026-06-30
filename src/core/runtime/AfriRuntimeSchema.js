/* AfriAI Runtime Event Schema */

export const RuntimeEventType = Object.freeze({
  WS_CONNECTED: "WS_CONNECTED",
  WS_DISCONNECTED: "WS_DISCONNECTED",
  WS_MESSAGE: "WS_MESSAGE",
  DAG_UPDATE: "DAG_UPDATE",
  DAG_REPLAY: "DAG_REPLAY",
  VIZ_FRAME: "VIZ_FRAME",
  CONSCIOUSNESS_UPDATE: "CONSCIOUSNESS_UPDATE",
  COMMAND_RECEIVED: "COMMAND_RECEIVED",
  DEVOPS_STATUS: "DEVOPS_STATUS",
  SYSTEM_ALERT: "SYSTEM_ALERT"
});

export const RuntimeSource = Object.freeze({
  WS: "ws",
  DAG: "dag",
  VIZ: "viz",
  CONSCIOUSNESS: "consciousness",
  COMMAND_DOCK: "command-dock",
  DEVOPS: "devops"
});
