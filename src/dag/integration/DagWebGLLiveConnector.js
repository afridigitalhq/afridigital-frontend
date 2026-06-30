/* Afri DagWebGL Live Stream Connector */

import { afriEventBus } from "../../core/runtime/AfriEventBus";

export function bindDagToWebGL(store = {}) {
  const dagState = store.dagState || { nodes: [] };

  afriEventBus.on("ui:dag:update", (node) => {
    dagState.nodes.push(node);

    afriEventBus.emit("webgl:dag:render", {
      type: "ADD_NODE",
      node
    });
  });

  afriEventBus.on("ui:pipeline:update", (stage) => {
    afriEventBus.emit("webgl:dag:render", {
      type: "PIPELINE_STAGE",
      stage
    });
  });

  afriEventBus.emit("webgl:dag:ready", { status: "active" });

  return dagState;
}
