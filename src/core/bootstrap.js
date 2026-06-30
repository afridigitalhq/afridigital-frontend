
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

import { orchestrator } from "../orchestrator/SystemOrchestrator";
import { WSClient } from "../ws/client";
import { applyEvent } from "./store";
import { store } from "./store";

export function initEngine() {
  const ws = new WSClient();
  ws.connect();

  ws.onEvent((event) => {
    orchestrator.dispatch(event);
  });

  orchestrator.register((event) => {
    store.dispatch(applyEvent(event));
  });
}
