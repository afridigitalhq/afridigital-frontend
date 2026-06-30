/* AfriAI Runtime Bootstrap */

import { afriRuntimeRegistry } from "./AfriRuntimeRegistry.js";

export function bootstrapRuntime(modules = {}) {
  Object.entries(modules).forEach(([name, module]) => {
    afriRuntimeRegistry.register(name, module);
  });

  return {
    version: "1.0.0",
    modules: afriRuntimeRegistry.list(),
    startedAt: Date.now()
  };
}
