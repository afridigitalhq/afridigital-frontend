/* Afri Runtime Initializer */

import { initializeRuntime } from "./integration/runtimeBootstrapIntegration.js";
import { loadRuntimeModules } from "./modules/loadRuntimeModules.js";
import { registerCoreRuntimeModules } from "./modules/registerCoreRuntimeModules.js";

export function initializeAfriRuntime(extraModules = {}) {
  const runtime = initializeRuntime(extraModules);
  loadRuntimeModules(extraModules);
  registerCoreRuntimeModules();

  return {
    ...runtime,
    modules: runtime.modules,
    ready: true
  };
}

export default initializeAfriRuntime;
