/* Afri Runtime Activation Layer */

import { initRuntimePipeline } from "../pipeline/runtimeExecutionPipeline.js";
import { initRuntimeOrchestration } from "../orchestration/runtimeOrchestrationBridge.js";
import { initRuntimeDagMapper } from "../dag/runtimeDagMapper.js";
import { afriEventBus } from "../../core/runtime/AfriEventBus.js";

export function activateAfriRuntime() {
  const store = {};

  afriEventBus.emit("runtime:activation:start", { status: "booting" });

  const pipeline = initRuntimePipeline(store);
  const orchestration = initRuntimeOrchestration(store);
  const dag = initRuntimeDagMapper(store);

  afriEventBus.emit("runtime:activation:ready", {
    pipeline,
    orchestration,
    dag
  });

  return { pipeline, orchestration, dag };
}
