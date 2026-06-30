import EventStream from "../../../bridge/EventStream";

/**
 * Collects workflow events for UI rendering
 */

const WorkflowStreamBridge = {
  listeners: [],

  subscribe(callback) {
    this.listeners.push(callback);

    EventStream.on((event) => {
      if (
        event.type === "AFRAI_WORKFLOW_STEP" ||
        event.type === "AFRAI_WORKFLOW_COMPLETE"
      ) {
        this.listeners.forEach((fn) => fn(event));
      }
    });
  }
};

export default WorkflowStreamBridge;
