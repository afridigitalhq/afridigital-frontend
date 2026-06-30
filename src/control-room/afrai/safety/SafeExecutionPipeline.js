import ExecutionGuard from "./ExecutionGuard";
import EventStream from "../../bridge/EventStream";

const SafeExecutionPipeline = {
  run(workflow, executor) {
    const allowed = ExecutionGuard.validate(workflow);

    if (!allowed) {
      return {
        status: "blocked",
        reason: "security policy violation"
      };
    }

    const result = executor(workflow);

    EventStream.emit({
      type: "AFRAI_SAFE_EXECUTION",
      payload: result
    });

    return result;
  }
};

export default SafeExecutionPipeline;
