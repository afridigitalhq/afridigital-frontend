/* Runtime ↔ Health Integration */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";

export function attachRuntimeToHealth(reportHealth) {
  if (typeof reportHealth !== "function") return;

  return afriEventBus.subscribe("runtime.health", event => {
    reportHealth(event);
  });
}
