/**
 * AFRAI CONTROL POLICY (HARD LIMITS)
 *
 * AI may:
 * - read ecosystem state
 * - propose workflows
 * - request execution
 *
 * AI may NOT:
 * - modify registry truth
 * - alter system architecture
 * - bypass SOC/security layers
 */

export const ControlPolicy = {
  canRead: true,
  canPlan: true,
  canExecuteViaGuard: true,

  canMutateSystem: false,
  canRewriteRegistry: false,
  canBypassSOC: false
};
