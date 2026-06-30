import EventStream from "../../bridge/EventStream";

/**
 * Bridges AfriAI UI + Execution layer into SOC visibility
 */

const AfriAISOCBridge = {
  publishCommand(command) {
    EventStream.emit({
      type: "SOC_AFRAI_COMMAND",
      payload: command
    });
  },

  publishExecution(execution) {
    EventStream.emit({
      type: "SOC_AFRAI_EXECUTION",
      payload: execution
    });
  },

  publishDecision(decision) {
    EventStream.emit({
      type: "SOC_AFRAI_DECISION",
      payload: decision
    });
  }
};

export default AfriAISOCBridge;
