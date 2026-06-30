/* Afri Runtime Execution Pipeline Bridge */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";

export function initRuntimePipeline(runtime = {}) {
  afriEventBus.on("runtime:command:result", (payload) => {
    afriEventBus.emit("runtime:pipeline:stage", {
      stage: "processed",
      payload
    });
  });

  afriEventBus.on("runtime:command:dispatch", (command) => {
    afriEventBus.emit("runtime:pipeline:stage", {
      stage: "queued",
      command
    });
  });

  afriEventBus.emit("runtime:pipeline:ready", { status: "active" });

  return { status: "PIPELINE_ACTIVE" };
}
