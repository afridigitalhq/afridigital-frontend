/**
 * SYSTEM TRUTH CONTRACT (DO NOT DUPLICATE LOGIC OUTSIDE THIS)
 *
 * RULE 1: AfriDigitalRegistry is the ONLY source of ecosystem truth
 * RULE 2: EventStream is the ONLY global event bus
 * RULE 3: GlobalAppRouter is the ONLY entry routing system
 *
 * Everything else must adapt to these, not replace them.
 */

export const SystemTruthRules = {
  registry: "AfriDigitalRegistry",
  eventBus: "EventStream",
  router: "GlobalAppRouter"
};
