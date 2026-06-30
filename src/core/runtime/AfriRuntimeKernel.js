/* AfriAI Runtime Kernel */

import { afriRuntimeRegistry } from "./AfriRuntimeRegistry.js";
import { afriEventBus } from "./AfriEventBus.js";
import { bootstrapRuntime } from "./AfriRuntimeBootstrap.js";

export class AfriRuntimeKernel {
  boot(modules = {}) {
    const runtime = bootstrapRuntime(modules);
    return {
      runtime,
      registry: afriRuntimeRegistry,
      eventBus: afriEventBus,
      status: "online",
      bootTime: Date.now()
    };
  }
}

export const afriRuntimeKernel = new AfriRuntimeKernel();
