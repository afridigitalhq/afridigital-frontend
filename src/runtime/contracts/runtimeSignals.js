/* Afri Runtime Signal Contract */

export const RUNTIME_SIGNALS = {
  BOOT_COMPLETE: "runtime:boot:complete",
  SYSTEM_READY: "system:ready",
  MODULE_ACTIVATE: "module:activate",
  MODULE_MISSING: "module:missing",
  LIFECYCLE_EVENT: "runtime:lifecycle:event",
  WS_MESSAGE: "ws.message"
};

export function validateSignal(signal) {
  return Object.values(RUNTIME_SIGNALS).includes(signal);
}
