import EventStream from "../bridge/EventStream";

const AfriAIRuntimeHook = {
  execute(command) {
    EventStream.emit({
      type: "AFRI_AI_COMMAND",
      payload: command
    });

    return {
      ok: true,
      executed: command
    };
  }
};

export default AfriAIRuntimeHook;
