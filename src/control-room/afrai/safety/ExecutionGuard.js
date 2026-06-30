import EventStream from "../../bridge/EventStream";

const ExecutionGuard = {
  validate(workflow) {
    // RULE: AI cannot mutate registry or system truth
    const blocked = workflow.some(step =>
      step.action === "rewrite" ||
      step.action === "mutate" ||
      step.action === "override"
    );

    if (blocked) {
      EventStream.emit({
        type: "AFRAI_SECURITY_BLOCK",
        payload: { reason: "mutation attempt blocked" }
      });

      return false;
    }

    return true;
  }
};

export default ExecutionGuard;
