import AfriAICrossBrain from "../intelligence/AfriAICrossBrain";
import ModuleMountEngine from "../modules/ModuleMountEngine";

/**
 * Global Decision Engine
 * Resolves ecosystem-wide execution conflicts
 */

const AfriAIGlobalDecisionEngine = {
  evaluate(intent) {
    const analysis = AfriAICrossBrain.analyze(
      Object.keys(ModuleMountEngine.getMounted?.() || {})
    );

    return {
      intent,
      analysis,
      decision: this.resolve(analysis)
    };
  },

  resolve(analysis) {
    // Simple priority logic (upgrade later to AI scoring)
    const activeModules = analysis.filter(
      (a) => a.capabilityMap?.status === "active"
    );

    if (activeModules.length === 0) {
      return {
        status: "no_valid_modules",
        action: "mount_required"
      };
    }

    return {
      status: "resolved",
      selected: activeModules[0]?.module || null,
      strategy: "priority_based_selection"
    };
  }
};

export default AfriAIGlobalDecisionEngine;
