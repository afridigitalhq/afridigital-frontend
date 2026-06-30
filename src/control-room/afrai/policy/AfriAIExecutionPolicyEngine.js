/**
 * Execution Policy Engine
 * Controls what AfriAI is allowed to execute
 */

const AfriAIExecutionPolicyEngine = {
  rules: {
    finance: "restricted",
    communication: "allowed",
    security: "restricted",
    tracking: "allowed",
    growth: "conditional"
  },

  evaluate(module, action) {
    const rule = this.rules[module] || "restricted";

    return {
      module,
      action,
      rule,
      allowed: this.isAllowed(rule, action),
      risk: this.calculateRisk(rule, action)
    };
  },

  isAllowed(rule, action) {
    if (rule === "restricted") return false;
    if (rule === "allowed") return true;
    if (rule === "conditional") return action !== "critical";
    return false;
  },

  calculateRisk(rule, action) {
    if (rule === "restricted") return "high";
    if (action === "critical") return "medium";
    return "low";
  }
};

export default AfriAIExecutionPolicyEngine;
