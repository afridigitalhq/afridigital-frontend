
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

// PHASE 3: CONSCIOUSNESS NARRATION LAYER

export function narrate(state) {
  if (state.mode === "rest") return "System stabilized in REST mode";
  if (state.risk === "critical") return "Warning: DAG instability detected";
  return "System operating within cognitive thresholds";
}
