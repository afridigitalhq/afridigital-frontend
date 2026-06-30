/* AfriAI Runtime Pipeline */

import { createRuntimeEvent, validateRuntimeEvent } from "./AfriRuntimeContract.js";
import { afriEventBus } from "./AfriEventBus.js";

export function processRuntimeEvent(event = {}) {
  const runtimeEvent = createRuntimeEvent(event);

  if (!validateRuntimeEvent(runtimeEvent)) {
    return false;
  }

  afriEventBus.publish(runtimeEvent);
  return runtimeEvent;
}
