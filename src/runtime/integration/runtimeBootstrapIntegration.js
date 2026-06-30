/* Runtime ↔ Bootstrap Integration */

import { bootstrapRuntime } from "../../core/runtime/AfriRuntimeBootstrap.js";

export function initializeRuntime(modules = {}) {
  return bootstrapRuntime(modules);
}
