/* AfriAI Consciousness Runtime */

import { afriEventBus } from "./AfriEventBus.js";
import { afriRuntimeHealth } from "./AfriRuntimeHealth.js";

export function startConsciousnessRuntime() {
  afriRuntimeHealth.update("consciousness","starting");

  const unsubscribe = afriEventBus.subscribe("WS_MESSAGE",(event)=>{
    afriRuntimeHealth.update("consciousness","active");
  });

  return {
    stop() {
      unsubscribe?.();
      afriRuntimeHealth.update("consciousness","stopped");
    }
  };
}
