import readline from "readline";
import { afriKernel } from "../kernel/AfriKernelController.js";

let runtime = null;

async function boot() {
  console.log("\n🧠 AFRI DIGITAL OS SHELL\n");

  const result = await afriKernel.boot();
  runtime = result;

  console.log("\n✅ SYSTEM READY");
  console.log(result);
  console.log("\nType 'help' for commands\n");

  startShell();
}

function startShell() {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "afri> "
  });

  rl.prompt();

  rl.on("line", async (line) => {

    const input = line.trim();

    if (input === "exit") process.exit(0);

    if (input === "status") {
      console.log(await afriKernel.status());
    }

    else if (input.startsWith("run ")) {
      const module = input.replace("run ", "");
      console.log(await afriKernel.run(module));
    }

    else if (input === "deploy") {
      console.log(await afriKernel.deploy("render"));
    }

    else if (input === "health") {
      console.log(await afriKernel.health());
    }

    else if (input === "reset") {
      console.log(afriKernel.reset());
    }

    else if (input === "help") {
      console.log(`
Commands:
  status
  run <module>
  deploy
  health
  reset
  exit
      `);
    }

    else {
      console.log("Unknown command");
    }

    rl.prompt();
  });
}

boot();
