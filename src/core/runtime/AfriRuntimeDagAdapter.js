/* AfriAI Runtime DAG Adapter */

import { createRuntimeGateway } from "./AfriRuntimeGateway.js";
import { normalizeDagEvent } from "../stream/dagStreamContract.js";

export function createRuntimeDagAdapter(modules = {}) {
  const gateway = createRuntimeGateway(modules);

  return {
    handle(event) {
      const normalized = normalizeDagEvent(event);
      gateway.publish({
        type: "DAG_EVENT",
        action: "update",
        payload: normalized
      });
      return normalized;
    }
  };
}
