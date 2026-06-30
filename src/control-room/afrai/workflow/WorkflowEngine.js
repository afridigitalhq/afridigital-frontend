import WorkflowDecomposer from "./WorkflowDecomposer";
import ModuleMountEngine from "../modules/ModuleMountEngine";
import EventStream from "../../bridge/EventStream";

const WorkflowEngine = {
  run(intent) {
    const steps = WorkflowDecomposer.decompose(intent);

    const results = steps.map((step, index) => {
      const mounted = ModuleMountEngine.mount(step.module);

      const result = {
        step: index + 1,
        module: step.module,
        capability: step.capability,
        status: mounted ? "executed" : "failed"
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

export default WorkflowEngine;
