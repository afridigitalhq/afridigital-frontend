/* AfriAI Visualization Runtime Adapter */

import { afriEventBus } from "./AfriEventBus.js";

export function attachRuntimeVisualization(onFrame) {
  return afriEventBus.subscribe("WS_MESSAGE", (event) => {
    onFrame?.(event.payload);
  });
}
