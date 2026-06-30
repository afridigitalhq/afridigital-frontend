import { generateInsights } from "../insight/afriInsightEngine.js";
import { generateSuggestions } from "../cognitive/afriCognitiveEngine.js";

export function analyzeCommandDock(input) {

  const insights = generateInsights();
  const cognition = generateSuggestions();

  const hints = [];

  // Convert insights → hints
  if (insights.summary.deploy > insights.summary.boot) {
    hints.push("⚠️ Deploy frequency exceeds boot cycles");
  }

  // Convert cognitive suggestions → hints
  for (const s of cognition.suggestions) {
    hints.push(`🧠 ${s.message}`);
  }

  return {
    input,
    hints,
    insightHealth: insights.health,
    cognitiveConfidence: cognition.confidence,
    summary: insights.summary
  };
}
