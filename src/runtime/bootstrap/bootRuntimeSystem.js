/* Afri Runtime Boot Sequencer */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";
import { initRuntimeCoreBridge } from "../coordination/initRuntimeCoreBridge.js";
import { initRuntimeOrchestration } from "../orchestration/initRuntimeOrchestration.js";
import { loadRuntimeModules } from "../modules/loadRuntimeModules.js";
import { RUNTIME_SIGNALS } from "../contracts/runtimeSignals.js";

export function bootRuntimeSystem(extraModules = {}) {
  // 1. Core coordination layer
  initRuntimeCoreBridge();

  // 2. Orchestration layer
  initRuntimeOrchestration();

  // 3. Module loading
  const modules = loadRuntimeModules(extraModules);

  // 4. Emit boot complete signal
  afriEventBus.emit(RUNTIME_SIGNALS.BOOT_COMPLETE, {
    timestamp: Date.now(),
    modulesCount: Object.keys(modules || {}).length
  });

  // 5. System ready
  afriEventBus.emit(RUNTIME_SIGNALS.SYSTEM_READY, { status: "ready" });

  return modules;
}
