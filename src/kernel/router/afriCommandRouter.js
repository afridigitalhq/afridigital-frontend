import { afriKernel } from "../afriKernel.js";
import { analyzeCommand } from "../../runtime/intelligence/afriCommandIntelligence.js";
import { afriAIMiddleware } from "../../runtime/middleware/afriAICommandMiddleware.js";

const middlewares = [];

export function use(fn) {
  middlewares.push(fn);
}

export async function executeCommand(input, args = []) {

  const analysis = analyzeCommand(typeof input === "string" ? input : input || "");

  let context = {
    cmd: analysis.cmd,
    args: analysis.args,
    intent: analysis.intent,
    timestamp: Date.now(),
    state: "incoming"
  };

  // middleware chain (safe + deterministic)
  for (const mw of [...middlewares, afriAIMiddleware]) {
    context = await mw(context);

    if (context?.blocked) {
      return { error: "command_blocked", reason: context.reason };
    }
  }

  switch (context.cmd) {
    case "boot":
      return await afriKernel.boot();

    case "status":
      return await afriKernel.status();

    case "run":
      return await afriKernel.run(context.args[0]);

    case "deploy":
      return await afriKernel.deploy(context.args[0]);

    case "health":
      return await afriKernel.health();

    default:
      return {
        error: "unknown_command",
        analysis: context
      };
  }
}
