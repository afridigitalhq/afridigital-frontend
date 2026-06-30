import { logCommand } from "./afriCommandJournal.js";

/**
 * 🧠 Observes kernel actions WITHOUT interfering
 */
export function observeKernel(command, result) {
  logCommand({
    command,
    result,
    mode: "production",
    source: "kernel"
  });
}
