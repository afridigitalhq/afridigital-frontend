#!/usr/bin/env node

import { afriKernel } from "../kernel/afriKernel.js";
import { executeCommand } from "../kernel/router/afriCommandRouter.js";

const args = process.argv.slice(2);
const raw = args.join(" ").trim();

function parse(raw) {
  if (!raw) return { cmd: "help", args: [] };

  const [cmd, ...rest] = raw.split(" ");
  return { cmd, args: rest };
}

async function main() {
  const { cmd, args } = parse(raw);

  console.log("\n🧠 AFRI SELF-CONTAINED CLI GATEWAY\n");

  switch (cmd) {

    case "boot":
      console.log(await afriKernel.boot());
      break;

    case "status":
      console.log(await afriKernel.status());
      break;

    case "run":
      console.log(await afriKernel.run(args[0]));
      break;

    case "deploy":
      console.log(await afriKernel.deploy(args[0] || "render"));
      break;

    case "health":
      console.log(await afriKernel.health());
      break;

    case "insight":
      const { generateInsights } = await import("../insight/afriInsightEngine.js");
      console.log(generateInsights());
      break;

    case "route":
      console.log(await executeCommand(args[0], args.slice(1)));
      break;

    case "help":
    default:
      console.log(`
AFRI COMMAND GATEWAY

Core:
  afri boot
  afri status
  afri run <module>
  afri deploy render
  afri health

AI Layer:
  afri insight

Kernel Router:
  afri route <cmd> <args>

Example:
  afri run dashboard
  afri deploy render
  afri insight
`);
  }
}

main().catch(err => {
  console.error("❌ CLI ERROR:", err);
});
