import { orchestrator } from "../../orchestrator/SystemOrchestrator.js";
import { WSClient } from "../../ws/client.js";

import { injectFutureEvents } from "../../predictive/futureInjector.js";
import { federateGraph } from "../../federation/multiRegionSync.js";
import { evolveNodes } from "../../evolution/nodeEvolutionEngine.js";
import { detectPreemptiveAnomalies } from "../../preempt/socPreemptEngine.js";

export const LiveGraphState = {
  nodes: new Map(),
  edges: [],
  predictions: [],
  federated: {},
  warnings: [],
  metrics: {
    events: 0
  }
};

export function initLiveConsciousness() {
  const ws = new WSClient();
  ws.connect();

  ws.onEvent((event) => {
    orchestrator.dispatch(event);

    if (event.type === "NODE_UPDATE") {
      LiveGraphState.nodes.set(event.node.id, event.node);
    }

    if (event.type === "EDGE_UPDATE") {
      LiveGraphState.edges.push(event);
    }

    LiveGraphState.metrics.events++;
  });

  // 🔮 predictive overlay loop
  setInterval(() => {
    LiveGraphState.predictions = injectFutureEvents(LiveGraphState);
  }, 3000);

  // 🛰 federation sync loop
  setInterval(() => {
    LiveGraphState.federated = federateGraph(LiveGraphState);
  }, 4000);

  // 🧬 evolution loop
  setInterval(() => {
    const evolved = evolveNodes(LiveGraphState);
    evolved.forEach(n => LiveGraphState.nodes.set(n.id, n));
  }, 5000);

  // 📡 preempt detection loop
  setInterval(() => {
    LiveGraphState.warnings =
      detectPreemptiveAnomalies(LiveGraphState).warnings;
  }, 1500);

  return LiveGraphState;
}
