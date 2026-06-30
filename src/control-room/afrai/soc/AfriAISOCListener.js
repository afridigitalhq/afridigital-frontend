import EventStream from "../../bridge/EventStream";

const AfriAISOCListener = {
  bind(setStateCallback) {
    EventStream.on((event) => {
      if (
        event.type.startsWith("SOC_AFRAI")
      ) {
        setStateCallback((prev) => [
          event,
          ...(prev || [])
        ]);
      }
    });
  }
};

export default AfriAISOCListener;
