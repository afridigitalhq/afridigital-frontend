/* Afri Runtime Module Activator */

import { afriRuntimeRegistry } from "../../core/runtime/AfriRuntimeRegistry.js";
import { recordRuntimeLifecycle } from "../runtimeLifecycle.js";

export function activateRuntimeModule(name) {
  const module = afriRuntimeRegistry.get(name);

  if (!module) {
    recordRuntimeLifecycle("MODULE_MISSING", { name });
    return false;
  }

  if (module?.init && typeof module.init === "function") {
    module.init();
  }

  recordRuntimeLifecycle("MODULE_ACTIVATED", { name });
  return true;
}

export function activateAllModules() {
  const modules = afriRuntimeRegistry.list();
  return modules.map(name => activateRuntimeModule(name));
}
