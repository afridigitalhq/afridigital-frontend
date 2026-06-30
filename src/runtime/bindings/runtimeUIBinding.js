/* Afri Runtime UI Binding Layer */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";

export function bindRuntimeToUI(store = {}) {
  const ui = store.ui || {};

  afriEventBus.on("dag:node:created", (node) => {
    ui.lastNode = node;
    afriEventBus.emit("ui:dag:update", node);
  });

  afriEventBus.on("runtime:pipeline:stage", (stage) => {
    ui.lastStage = stage;
    afriEventBus.emit("ui:pipeline:update", stage);
  });

  afriEventBus.emit("ui:binding:ready", { status: "active" });

  return ui;
}
