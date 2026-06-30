/* AfriAI DAG Runtime Adapter */

import { afriEventBus } from "./AfriEventBus.js";

export function attachRuntimeDag(dagEngine) {
  return afriEventBus.subscribe("WS_MESSAGE", (event) => {
    dagEngine?.update?.(event.payload);
  });
}
