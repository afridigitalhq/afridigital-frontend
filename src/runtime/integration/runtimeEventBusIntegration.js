/* AfriAI Runtime EventBus Integration */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";
import { processRuntimeEvent } from "../../core/runtime/AfriRuntimePipeline.js";

export function publishRuntimeEvent(event = {}) {
  const runtimeEvent = processRuntimeEvent(event);
  if (!runtimeEvent) return false;
  afriEventBus.publish(runtimeEvent);
  return runtimeEvent;
}
