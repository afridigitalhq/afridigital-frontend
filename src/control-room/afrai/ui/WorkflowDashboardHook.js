import WorkflowEngine from "../workflow/WorkflowEngine";
import EventStream from "../../bridge/EventStream";

/**
 * Connects Command Center → Workflow Engine
 */

const WorkflowDashboardHook = {
  run(intent) {
    const result = WorkflowEngine.run(intent);

    EventStream.emit({
      type: "AFRAI_UI_WORKFLOW_TRIGGERED",
      payload: { intent, result }
    });

    return result;
  }
};

export default WorkflowDashboardHook;
