import { analyzeCommandDock } from "../commanddock/afriCommandDockAI.js";

export function assistCommand(input) {

  const analysis = analyzeCommandDock(input);

  const warnings = [];
  const suggestions = [];

  for (const h of analysis.hints) {
    if (h.includes("Deploy")) warnings.push(h);
    else suggestions.push(h);
  }

  return {
    input,
    warnings,
    suggestions,
    summary: analysis.summary,
    confidence: analysis.cognitiveConfidence,
    mode: "assist_readonly"
  };
}
