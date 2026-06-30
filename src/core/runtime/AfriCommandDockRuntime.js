/* AfriAI Command Dock Runtime */

import { afriEventBus } from "./AfriEventBus.js";
import { afriRuntimeHealth } from "./AfriRuntimeHealth.js";

export function startCommandDockRuntime(onCommand) {
  afriRuntimeHealth.update("commandDock","starting");

  const unsubscribe = afriEventBus.subscribe("COMMAND",(event)=>{
    afriRuntimeHealth.update("commandDock","active");
    onCommand?.(event);
  });

  return {
    stop() {
      unsubscribe?.();
      afriRuntimeHealth.update("commandDock","stopped");
    }
  };
}
