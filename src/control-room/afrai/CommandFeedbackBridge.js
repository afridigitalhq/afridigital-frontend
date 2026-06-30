import EventStream from "../bridge/EventStream";

const CommandFeedbackBridge = {
  sendFeedback(type, data) {
    EventStream.emit({
      type: "AFRI_AI_FEEDBACK",
      category: type,
      payload: data
    });
  }
};

export default CommandFeedbackBridge;
