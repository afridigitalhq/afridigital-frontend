import EventStream from "../bridge/EventStream";

/**
 * LEGACY COMPATIBILITY LAYER
 * - EventBus and EventDispatcher should route through EventStream
 */

const EventSystemAdapter = {
  emit(event) {
    return EventStream.emit(event);
  },

  on(listener) {
    return EventStream.on(listener);
  }
};

export default EventSystemAdapter;
