import AfriAIController from "./AfriAIController";

const AfriAINLPBridge = {
  process(text) {
    return AfriAIController.execute(text);
  }
};

export default AfriAINLPBridge;
