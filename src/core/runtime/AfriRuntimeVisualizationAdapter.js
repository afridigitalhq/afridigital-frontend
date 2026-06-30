/* AfriAI Runtime Visualization Adapter */

import { createRuntimeGateway } from "./AfriRuntimeGateway.js";

export function createRuntimeVisualizationAdapter(render, modules = {}) {
  const gateway = createRuntimeGateway(modules);

  return {
    update(event) {
      gateway.publish({
        type: "VISUALIZATION_EVENT",
        action: "render",
        payload: event
      });
      if (typeof render === "function") {
        render(event);
      }
    }
  };
}
