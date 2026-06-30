/* Afri Runtime DAG Mapper */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";

export function initRuntimeDagMapper(store = {}) {
  const dag = store.dag || { nodes: [], edges: [] };

  const addNode = (type, payload) => {
    const node = {
      id: `${type}-${Date.now()}`,
      type,
      payload,
      timestamp: Date.now()
    };

    dag.nodes.push(node);
    afriEventBus.emit("dag:node:created", node);
  };

  afriEventBus.on("runtime:pipeline:stage", (event) => {
    addNode("pipeline_stage", event);
  });

  afriEventBus.on("runtime:command:received", (cmd) => {
    addNode("command_received", cmd);
  });

  afriEventBus.on("runtime:command:result", (res) => {
    addNode("command_result", res);
  });

  afriEventBus.emit("dag:mapper:ready", { status: "active" });

  return dag;
}
