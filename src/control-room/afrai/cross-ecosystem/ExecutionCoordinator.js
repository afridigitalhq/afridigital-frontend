import WorkflowPlanner from "./WorkflowPlanner";
import EventStream from "../../bridge/EventStream";
import ModuleRegistry from "../../modules/ModuleRegistry";

const ExecutionCoordinator = {
  run(input) {
    const workflow = WorkflowPlanner.plan(input);

    const results = workflow.map(step => {
      const instance = ModuleRegistry.get(step.module);

      const result = {
        module: step.module,
        status: instance ? "resolved" : "missing"
      };

      EventStream.emit({
        type: "AFRAI_WORKFLOW_STEP",
        payload: result
      });

      return result;
    });

    EventStream.emit({
      type: "AFRAI_WORKFLOW_COMPLETE",
      payload: { results }
    });

    return results;
  }
};

export default ExecutionCoordinator;
