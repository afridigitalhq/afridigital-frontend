import { readHistory } from "../state/afriHistoryManager.js";

export function generateInsights() {
  const history = readHistory();

  const summary = {
    totalCommands: history.length,
    boot: history.filter(h => h.command === "boot").length,
    run: history.filter(h => h.command === "run").length,
    deploy: history.filter(h => h.command === "deploy").length,
    health: history.filter(h => h.command === "health").length
  };

  const alerts = [];

  if (summary.deploy > summary.boot) {
    alerts.push("Deploys exceed boots (possible imbalance)");
  }

  if (summary.run > 10) {
    alerts.push("High module execution frequency");
  }

  const health =
    alerts.length === 0 ? "healthy" : "attention_required";

  return {
    summary,
    alerts,
    health
  };
}
