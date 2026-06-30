/* Runtime ↔ Visualization Integration */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";

export function attachRuntimeToVisualization(render) {
  if (typeof render !== "function") return;

  return afriEventBus.subscribe("runtime.update", event => {
    render(event);
  });
}
