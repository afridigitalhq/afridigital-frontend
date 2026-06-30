/* Afri Runtime Orchestration Bridge */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";
import { activateRuntimeModule } from "../modules/activateRuntimeModules.js";
import { recordRuntimeLifecycle } from "../runtimeLifecycle.js";

export function initRuntimeOrchestration() {
  if (!afriEventBus) return;

  afriEventBus.on("runtime:boot:complete", () => {
    recordRuntimeLifecycle("ORCHESTRATION_BOOT");
  });

  afriEventBus.on("module:activate", ({ name }) => {
    activateRuntimeModule(name);
  });

  afriEventBus.on("system:ready", () => {
    recordRuntimeLifecycle("SYSTEM_READY");
  });

  return true;
}
