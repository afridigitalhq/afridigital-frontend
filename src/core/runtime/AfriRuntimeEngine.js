/* AfriAI Runtime Engine */

import { processRuntimeEvent } from "./AfriRuntimePipeline.js";
import { afriRuntimeOrchestrator } from "./AfriRuntimeOrchestrator.js";

export class AfriRuntimeEngine {
  start() {
    return afriRuntimeOrchestrator.start();
  }

  dispatch(event = {}) {
    return processRuntimeEvent(event);
  }

  stop() {
    return afriRuntimeOrchestrator.stop();
  }
}

export const afriRuntimeEngine = new AfriRuntimeEngine();
