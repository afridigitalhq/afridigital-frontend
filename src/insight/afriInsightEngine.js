import { getHistory } from "../memory/afriCommandJournal.js";

/**
 * 🧠 AFRI INSIGHT ENGINE (READ-ONLY)
 * No execution rights. Only analysis.
 */

export function generateInsights() {
  const history = getHistory();

  const commands = history.map(h => h.command || "unknown");

  const summary = {
    totalCommands: history.length,
    uniqueCommands: [...new Set(commands)].length,
    lastCommand: history[history.length - 1] || null
  };

  // simple anomaly detection (safe heuristics)
  const repeatedBoots = commands.filter(c => c === "boot").length;
  const repeatedDeploys = commands.filter(c => c.includes("deploy")).length;

  const alerts = [];

  if (repeatedBoots > 3) {
    alerts.push({
      level: "warning",
      message: "Frequent boot cycles detected"
    });
  }

  if (repeatedDeploys > 2) {
    alerts.push({
      level: "warning",
      message: "Multiple deployments detected in short history window"
    });
  }

  return {
    summary,
    alerts,
    health: alerts.length === 0 ? "healthy" : "attention_required"
  };
}
