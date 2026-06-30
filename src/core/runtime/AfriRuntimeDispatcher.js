/* AfriAI Runtime Dispatcher */

import { afriEventBus } from "./AfriEventBus.js";
import { validateRuntimeEvent } from "./AfriRuntimeContract.js";

export function dispatchRuntimeEvent(event) {
  if (!validateRuntimeEvent(event)) {
    console.warn("[AfriRuntime] Invalid runtime event", event);
    return false;
  }

  afriEventBus.publish(event);
  return true;
}
