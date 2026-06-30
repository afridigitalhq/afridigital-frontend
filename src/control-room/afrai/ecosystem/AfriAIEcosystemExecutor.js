import AfriAIGlobalDecisionEngine from "../governance/AfriAIGlobalDecisionEngine";
import AfriAIExecutionPolicyEngine from "../policy/AfriAIExecutionPolicyEngine";
import AfriAIApprovalGate from "../approval/AfriAIApprovalGate";
import ModuleMountEngine from "../modules/ModuleMountEngine";

/**
 * 🌍 Universal Ecosystem Execution Engine
 * Dynamically handles ALL AfriDigital modules
 */

const RESTRICTED_ACTIONS = ["unmount", "shutdown", "delete_module"];

const AfriAIEcosystemExecutor = {
  execute({ module, action, payload }) {
    const decision = AfriAIGlobalDecisionEngine.evaluate({
      module,
      action,
      payload
    });

    const policy = AfriAIExecutionPolicyEngine.evaluate(module, action);

    // 🚫 HARD RULE: restricted actions require admin approval
    if (RESTRICTED_ACTIONS.includes(action)) {
      return AfriAIApprovalGate.request({
        module,
        action,
        payload,
        reason: "restricted_action_requires_admin_approval",
        policy
      });
    }

    if (!policy.allowed) {
      return {
        status: "blocked_by_policy",
        module,
        action
      };
    }

    const mounted = ModuleMountEngine.getMounted?.() || {};

    if (!mounted[module]) {
      return {
        status: "module_not_mounted",
        module,
        suggestion: "use_module_discovery_to_mount"
      };
    }

    return {
      status: "executed",
      module,
      action,
      decision,
      policy
    };
  },

  /**
   * 🌍 Fully dynamic module discovery (ALL SYSTEMS)
   */
  discoverModules() {
    const mounted = ModuleMountEngine.getMounted?.() || {};

    return Object.keys(mounted).map((module) => {
      const instance = mounted[module]?.instance || {};

      return {
        module,
        domain: instance.domain || "unknown",
        capabilities: instance.capabilities || [],
        status: "active"
      };
    });
  },

  /**
   * 🧭 Domain grouping (SOC, Finance, Comms, etc)
   */
  groupByDomain() {
    const modules = this.discoverModules();

    return modules.reduce((acc, mod) => {
      const d = mod.domain || "unknown";
      acc[d] = acc[d] || [];
      acc[d].push(mod);
      return acc;
    }, {});
  }
};

export default AfriAIEcosystemExecutor;
