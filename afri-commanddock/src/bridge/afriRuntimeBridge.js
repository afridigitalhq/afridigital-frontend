import { getRuntimeSnapshotSafe } from "../../../src/runtime/afriRuntimeGateway.js";

export async function getRuntimeSnapshot() {
  const snap = getRuntimeSnapshotSafe();

  return {
    runtime: true,
    state: snap.state,
    history: snap.history,
    events: snap.events,
    metrics: snap.metrics
  };
}
