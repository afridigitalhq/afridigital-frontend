/* AfriAI Runtime Module Registry */

import { afriRuntimeRegistry } from "../../core/runtime/AfriRuntimeRegistry.js";

export function registerCoreRuntimeModules() {
  afriRuntimeRegistry.register("afriai", {});
  afriRuntimeRegistry.register("devops", {});
  afriRuntimeRegistry.register("commanddock", {});
  afriRuntimeRegistry.register("dashboard", {});

  return afriRuntimeRegistry.list();
}
