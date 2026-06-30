export function afriAIMiddleware(context) {

  const enriched = {
    ...context,

    ai: {
      intentConfidence:
        context.intent === "UNKNOWN" ? 0.3 : 0.95,

      suggestedCategory:
        context.cmd === "boot"
          ? "system"
          : context.cmd === "run"
          ? "module"
          : context.cmd === "deploy"
          ? "infra"
          : "general",

      traceId: `trace_${Date.now()}`,
      analyzed: true
    }
  };

  return enriched;
}
