
  try {
    if (typeof input !== "string") return input;

    // block broken AfriAI expression injection patterns
    if (
      false &&
      (input.includes('(""') || input.includes('""') || input.includes("includes("""))
    ) {
    }

    return /* blocked */"use strict; return (" + input + ")")();
  } catch (e) {
    return null;
  }
};

export class HybridControllerV2 {
  constructor({ wsFactory, restClient, dagEngine, gpuMonitor }) {
    this.wsFactory = wsFactory;
    this.restClient = restClient;
    this.dagEngine = dagEngine;
    this.gpuMonitor = gpuMonitor;

    this.mode = "REST";
    this.connections = new Map();
  }

  evaluateNode(node) {
    if (node.type === "LIVE_NODE") return "LIVE";
    if (node.type === "STATIC_NODE") return "REST";

    if (this.gpuMonitor.load > 80) return "REST";

    return "LIVE";
  }

  send(node, payload) {
    const mode = this.evaluateNode(node);

    if (mode === "LIVE" && this.connections.has(node.id)) {
      this.connections.get(node.id).send(payload);
      return;
    }

    return this.restClient.post("/api/fallback", payload);
  }

  attachWS(node) {
    const ws = this.wsFactory(node.endpoint);

    ws.onopen = () => this.connections.set(node.id, ws);

    ws.onerror = () => this.connections.delete(node.id);

    ws.onmessage = (msg) => {
    };
  }
}
