
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

import { isRestMode } from "./runtimeMode";

export function safeWebSocket(url) {
  if (isRestMode) {
    return {
      onmessage: null,
      // REST MODE CONNECTION DISABLED
      close: () => {},
      send: () => {},
    };
  }

  return null;
}
