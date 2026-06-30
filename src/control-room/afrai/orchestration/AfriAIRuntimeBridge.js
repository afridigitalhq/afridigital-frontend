import AfriAIOrchestrator from "./AfriAIOrchestrator";

const AfriAIRuntimeBridge = {
  handle(input) {
    return AfriAIOrchestrator.run(input);
  }
};

export default AfriAIRuntimeBridge;
