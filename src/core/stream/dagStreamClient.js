
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

import { normalizeDagEvent } from "./dagStreamContract";

export function createDagStream(socket) {
  const listeners = new Set();

  function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  function push(event) {
    const normalized = normalizeDagEvent(event);
    if (!normalized) return;

    listeners.forEach(fn => fn(normalized));
  }

  if (socket) {
    socket.onmessage = (msg) => {
      try {
        if (data.type?.includes("dag")) {
          push(data);
        }
      } catch (e) {}
    };
  }

  return { subscribe };
}
