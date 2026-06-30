import { getRuntime } from "../runtime/runtimeKernel.js";
import { readState, updateState } from "../runtime/state/afriStateManager.js";
import { appendHistory } from "../runtime/state/afriHistoryManager.js";
import { emit } from "../runtime/events/afriEventBus.js";
import { observeKernel } from "../memory/afriKernelObserver.js";

export const afriKernel = {

  async boot() {
    const r = await getRuntime();

    const state = readState();
    updateState({
      bootCount: state.bootCount + 1,
      lastBoot: new Date().toISOString(),
      lastCommand: "boot"
    });

    const result = {
      status: "booted",
      modules: r.modules.length
    };

    observeKernel("boot", result);
    appendHistory("boot");
    emit("boot");
    return result;
  },

  async status() {
    const r = await getRuntime();

    const result = {
      version: r.version,
      mode: r.mode,
      modules: r.modules,
      ready: r.ready
    };

    observeKernel("status", result);
    return result;
  },

  async run(module) {
    const r = await getRuntime();

    const result = !r.modules.includes(module)
      ? { ok: false, error: "module_not_found" }
      : { ok: true, module, state: "active" };

    if (result.ok) {
      updateState({
        lastCommand: "run",
        lastModule: module
      });
    }

    observeKernel("run:" + module, result);
    appendHistory("run", { module });
    emit("run", { module });
    return result;
  },

  async deploy(platform = "render") {
    const r = await getRuntime();

    updateState({
      lastCommand: "deploy",
      lastDeploy: platform
    });

    const result = {
      platform,
      mode: r.mode,
      modules: r.modules.length,
      status: "deployment_ready"
    };

    observeKernel("deploy", result);
    appendHistory("deploy", { platform });
    emit("deploy", { platform });
    return result;
  },

  async health() {
    const r = await getRuntime();

    const result = {
      kernel: "stable",
      registry: "ok",
      runtime: r.ready ? "active" : "down",
      modules: r.modules.length
    };

    observeKernel("health", result);
    appendHistory("health");
    emit("health");
    return result;
  }
};
