import EventStream from "../../bridge/EventStream";

/**
 * 🧠 AfriAI Event Filter Layer
 * Extracts only AI-relevant intelligence signals
 */

const AfriAIEventStream = {
  listeners: [],

  subscribe(callback) {
    this.listeners.push(callback);

    // subscribe to global event stream
    EventStream.subscribe((event) => {
      if (this.isAfriAIEvent(event)) {
        callback(event);
      }
    });
  },

  isAfriAIEvent(event) {
    if (!event) return false;

    return (
      event.source === "afrai" ||
      event.module?.startsWith("afrai") ||
      event.type?.includes("ai") ||
      event.origin === "ai"
    );
  }
};

export default AfriAIEventStream;
