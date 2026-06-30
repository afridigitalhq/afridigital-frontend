import EcosystemReasoner from "./EcosystemReasoner";

const DecisionEngine = {
  decide(input) {
    const analysis = EcosystemReasoner.analyze(input);

    let action = "idle";

    if (analysis.matchedModules.length > 0) {
      action = "route_to_module";
    }

    if (input.includes("status")) {
      action = "query_soc";
    }

    if (input.includes("init")) {
      action = "initialize_system";
    }

    return {
      action,
      analysis
    };
  }
};

export default DecisionEngine;
