/* AfriAI Runtime Loader */

import { initializeRuntime } from "./integration/runtimeBootstrapIntegration.js";

export function startAfriRuntime(modules = {}) {
  return initializeRuntime(modules);
}

export default startAfriRuntime;
