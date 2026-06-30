/* AfriAI Unified Runtime Contract */

export const AFRI_RUNTIME_VERSION = "1.0.0";

export function createRuntimeEvent(event = {}) {
  return {
    version: AFRI_RUNTIME_VERSION,
    timestamp: Date.now(),
    source: "runtime",
    ...event
  };
}

export function validateRuntimeEvent(event) {
  return !!(
    event &&
    typeof event === "object" &&
    event.version &&
    event.type &&
    event.action &&
    event.timestamp
  );
}
