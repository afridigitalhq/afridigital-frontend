/* Runtime ↔ Registry Integration */

import { afriRuntimeRegistry } from "../../core/runtime/AfriRuntimeRegistry.js";

export function attachRuntimeToRegistry(moduleName, moduleInstance) {
  if (!moduleName || !moduleInstance) return;

  afriRuntimeRegistry.register(moduleName, moduleInstance);

  return () => afriRuntimeRegistry.unregister(moduleName);
}
