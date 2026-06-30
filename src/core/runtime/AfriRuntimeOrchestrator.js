/* AfriAI Runtime Orchestrator */

import { afriRuntimeRegistry } from "./AfriRuntimeRegistry.js";
import { afriEventBus } from "./AfriEventBus.js";

export class AfriRuntimeOrchestrator {
  constructor() {
    this.registry = afriRuntimeRegistry;
    this.bus = afriEventBus;
  }

  start() {
    return {
      status: "running",
      modules: this.registry.list(),
      startedAt: Date.now()
    };
  }

  stop() {
    return {
      status: "stopped",
      stoppedAt: Date.now()
    };
  }
}

export const afriRuntimeOrchestrator = new AfriRuntimeOrchestrator();
