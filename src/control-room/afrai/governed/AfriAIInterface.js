import AfriAIGovernedCore from "./AfriAIGovernedCore";

const AfriAIInterface = {
  ask(input) {
    return AfriAIGovernedCore.handle(input);
  }
};

export default AfriAIInterface;
