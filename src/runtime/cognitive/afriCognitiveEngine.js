import { readHistory } from "../state/afriHistoryManager.js";
import { readMetrics } from "../metrics/afriRuntimeMetrics.js";

export function generateSuggestions() {
  const history = readHistory();
  const metrics = readMetrics();

  const suggestions = [];

  const boots = history.filter(h => h.command === "boot").length;
  const deploys = history.filter(h => h.command === "deploy").length;
  const runs = history.filter(h => h.command === "run").length;

  // Pattern 1: no boot before usage
  if (runs > boots) {
    suggestions.push({
      type: "warning",
      message: "System runs exceed boot cycles — consider boot validation before execution"
    });
  }

  // Pattern 2: deploy-heavy usage
  if (deploys > boots) {
    suggestions.push({
      type: "optimization",
      message: "Deployment frequency is high — consider batching deploy operations"
    });
  }

  // Pattern 3: health monitoring imbalance
  if (metrics.health < 1) {
    suggestions.push({
      type: "risk",
      message: "Health checks are low — increase monitoring frequency"
    });
  }

  return {
    suggestions,
    confidence: suggestions.length === 0 ? 0.9 : 0.6
  };
}
