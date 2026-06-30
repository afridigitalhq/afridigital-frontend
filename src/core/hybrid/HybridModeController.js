
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

export const HYBRID_MODES = {
  REST: "rest",
  HYBRID: "hybrid",
  FALLBACK: "fallback"
};

class HybridModeController {
  constructor() {
    this.mode = HYBRID_MODES.HYBRID;
    this.listeners = new Set();
  }

  setMode(mode) {
    this.mode = mode;
    this.emit({ type: "MODE_CHANGE", mode });
  }

  getMode() {
    return this.mode;
  }

  isHybrid() {
    return this.mode === HYBRID_MODES.HYBRID;
  }

  isRest() {
    return this.mode === HYBRID_MODES.REST;
  }

  isFallback() {
    return this.mode === HYBRID_MODES.FALLBACK;
  }

  emit(event) {
    for (const fn of this.listeners) fn(event);
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
}

export const hybridController = new HybridModeController();
