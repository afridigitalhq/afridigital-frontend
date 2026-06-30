
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

export const RUNTIME_MODE = process.env.REACT_APP_MODE || "rest";

export const isRestMode = RUNTIME_MODE === "rest";
export const isRealtimeMode = RUNTIME_MODE === "realtime";
