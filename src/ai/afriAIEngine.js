import { executeCommand } from "../kernel/router/afriCommandRouter.js";

/**
 * 🧠 AfriAI Command Intelligence Layer
 * Converts natural intent → structured OS commands
 */
export async function afriAI(input) {

  const text = input.toLowerCase().trim();

  // simple intent parsing (we will evolve this into LLM later)

  if (text.includes("start") || text.includes("boot")) {
    return executeCommand("boot");
  }

  if (text.includes("status")) {
    return executeCommand("status");
  }

  if (text.includes("run")) {
    const module = text.split(" ").pop();
    return executeCommand("run", [module]);
  }

  if (text.includes("deploy")) {
    const platform = text.split(" ").pop() || "render";
    return executeCommand("deploy", [platform]);
  }

  if (text.includes("health")) {
    return executeCommand("health");
  }

  if (text.includes("reset")) {
    return executeCommand("reset");
  }

  return {
    error: "unrecognized_intent",
    input: input,
    suggestion: "Try: boot, status, run dashboard, deploy render"
  };
}
