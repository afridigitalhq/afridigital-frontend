import AfriAIExecutionPolicyEngine from "../policy/AfriAIExecutionPolicyEngine";
import AfriAIApprovalGate from "../approval/AfriAIApprovalGate";
import AfriAIRollbackEngine from "../rollback/AfriAIRollbackEngine";

/**
 * Governs full AI execution lifecycle:
 * policy → approval → execution → rollback tracking
 */

const AfriAIGovernedLifecycleEngine = {
  createExecution(module, action, payload) {
    const policy = AfriAIExecutionPolicyEngine.evaluate(module, action);

    const approval = AfriAIApprovalGate.request({
      module,
      action,
      payload,
      policy
    });

    return {
      id: approval.id,
      stage: "pending_approval",
      policy,
      approval
    };
  },

  approveExecution(id, execution) {
    const approved = AfriAIApprovalGate.approve(id);

    const snapshot = AfriAIRollbackEngine.snapshot(execution);

    return {
      id,
      stage: "approved",
      snapshot,
      approved
    };
  },

  rollbackExecution(id) {
    return AfriAIRollbackEngine.rollback(id);
  }
};

export default AfriAIGovernedLifecycleEngine;
