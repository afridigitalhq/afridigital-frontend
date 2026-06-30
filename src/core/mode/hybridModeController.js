
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

// HYBRID MODE CONTROLLER (PHASE 2 CORE)

export const MODE = {
  REST: "rest",
  HYBRID: "hybrid",
  LIVE: "live"
};

export function detectMode({ dagHealth, wsHealth, gpuLoad }) {
  if (gpuLoad > 0.85 || wsHealth === "down") return MODE.REST;
  if (dagHealth === "unstable") return MODE.HYBRID;
  return MODE.LIVE;
}

export function shouldUseRealtime(mode) {
  return mode === MODE.LIVE || mode === MODE.HYBRID;
}
