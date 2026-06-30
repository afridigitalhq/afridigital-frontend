/* Afri Runtime Core Coordination Bridge */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";
import { RUNTIME_SIGNALS } from "../contracts/runtimeSignals.js";
import { initRuntimeOrchestration } from "../orchestration/initRuntimeOrchestration.js";
import { recordRuntimeLifecycle } from "../runtimeLifecycle.js";

export function initRuntimeCoreBridge() {
  initRuntimeOrchestration();

  afriEventBus.on(RUNTIME_SIGNALS.BOOT_COMPLETE, () => {
    recordRuntimeLifecycle("CORE_BOOT_SYNC");
  });

  afriEventBus.on(RUNTIME_SIGNALS.MODULE_ACTIVATE, ({ name }) => {
    recordRuntimeLifecycle(`MODULE_ACTIVE:${name}`);
  });

  afriEventBus.on(RUNTIME_SIGNALS.WS_MESSAGE, () => {
    recordRuntimeLifecycle("WS_EVENT_SYNC");
  });

  return true;
}
