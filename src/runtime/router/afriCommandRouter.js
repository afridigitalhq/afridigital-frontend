import { getRuntime } from "../runtimeKernel.js";

export async function executeCommand(cmd, args = []) {
  const r = await getRuntime();

  switch (cmd) {

    case "boot":
      return {
        status: "already_booted",
        modules: r.modules.length
      };

    case "status":
      return {
        version: r.version,
        modules: r.modules.length,
        ready: r.ready
      };

    case "modules":
      return r.modules;

    case "run":
      const module = args[0];

      if (!module) return { error: "missing_module" };

      return {
        ok: r.modules.includes(module),
        module,
        state: r.modules.includes(module) ? "active" : "missing"
      };

    case "deploy":
      return {
        platform: args[0] || "render",
        status: "ready",
        mode: "singleton_kernel"
      };

    default:
      return { error: "unknown_command", cmd };
  }
}
