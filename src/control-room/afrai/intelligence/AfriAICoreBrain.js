import DecisionEngine from "./DecisionEngine";
import EventStream from "../../bridge/EventStream";

const AfriAICoreBrain = {
  execute(input) {
    const decision = DecisionEngine.decide(input);

    EventStream.emit({
      type: "AFRAI_DECISION",
      payload: decision
    });

    return decision;
  }
};

export default AfriAICoreBrain;
