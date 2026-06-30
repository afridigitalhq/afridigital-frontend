/* Afri Runtime Telemetry Layer */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";
import { RUNTIME_SIGNALS } from "../contracts/runtimeSignals.js";

export function emitTelemetry(event, data = {}) {
  const payload = {
    event,
    data,
    timestamp: Date.now()
  };

  afriEventBus.emit("runtime:telemetry", payload);
  return payload;
}

export function attachRuntimeTelemetry(runtimeContext = {}) {
  emitTelemetry("telemetry:init", { status: "attached" });

  if (runtimeContext.booted) {
    emitTelemetry("telemetry:boot_state", { booted: true });
  }

  return true;
}
