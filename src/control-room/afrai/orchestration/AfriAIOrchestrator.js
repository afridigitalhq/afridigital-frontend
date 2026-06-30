import AfriAICoreBrain from "../intelligence/AfriAICoreBrain";
import AfriAIExecutor from "./AfriAIExecutor";

const AfriAIOrchestrator = {
  run(input) {
    const decision = AfriAICoreBrain.execute(input);

    const execution = AfriAIExecutor.execute(decision);

    return {
      decision,
      execution
    };
  }
};

export default AfriAIOrchestrator;
