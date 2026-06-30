/* AfriAI EventBus DAG Integration */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";

export function attachDagRuntime(onDagEvent) {
  return afriEventBus.subscribe("ws.message", (event) => {
    onDagEvent?.(event);
  });
}
