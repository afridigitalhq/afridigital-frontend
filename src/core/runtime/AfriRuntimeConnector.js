/* AfriAI Runtime Connector */

import { afriRuntimeEngine } from "./AfriRuntimeEngine.js";

export function initializeRuntime() {
  return afriRuntimeEngine.start();
}

export function dispatchRuntimeEvent(event = {}) {
  return afriRuntimeEngine.dispatch(event);
}

export function shutdownRuntime() {
  return afriRuntimeEngine.stop();
}
