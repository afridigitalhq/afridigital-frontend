/* Afri Runtime Command Gate */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";
import { RUNTIME_SIGNALS } from "../contracts/runtimeSignals.js";

export function validateCommand(command) {
  if (!command || !command.type) return false;
  return RUNTIME_SIGNALS.includes(command.type);
}

export function executeCommand(command, runtime = {}) {
  const valid = validateCommand(command);

  afriEventBus.emit("runtime:command:received", command);

  if (!valid) {
    afriEventBus.emit("runtime:command:rejected", command);
    return { ok: false, reason: "INVALID_SIGNAL" };
  }

  afriEventBus.emit("runtime:command:accepted", command);

  if (runtime.handlers && runtime.handlers[command.type]) {
    return runtime.handlers[command.type](command.payload || {});
  }

  return { ok: true, status: "NO_HANDLER" };
}
