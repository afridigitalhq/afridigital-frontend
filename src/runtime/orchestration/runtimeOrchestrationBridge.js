/* Afri Runtime Orchestration Bridge */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";
import { executeCommand } from "../command/runtimeCommandGate.js";

export function initRuntimeOrchestration(runtime = {}) {
  afriEventBus.on("runtime:command:dispatch", (command) => {
    const result = executeCommand(command, runtime);

    afriEventBus.emit("runtime:command:result", {
      command,
      result
    });
  });

  afriEventBus.emit("runtime:orchestration:ready", { status: "active" });

  return { status: "ORCHESTRATION_ACTIVE" };
}
