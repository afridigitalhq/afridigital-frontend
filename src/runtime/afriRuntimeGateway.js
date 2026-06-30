import { readState } from "./state/afriStateManager.js";
import { readHistory } from "./state/afriHistoryManager.js";
import { readEvents } from "./events/afriEventBus.js";
import { readMetrics } from "./metrics/afriRuntimeMetrics.js";

export function getRuntimeSnapshotSafe() {
  return {
    state: readState(),
    history: readHistory(),
    events: readEvents(),
    metrics: readMetrics()
  };
}
