import { startAfriRuntime } from "../runtime/startAfriRuntime.js.js";
import { afriRuntimeRegistry } from "../core/runtime/AfriRuntimeRegistry.js";

let runtime = null;

export const afriKernel = {

  async boot() {
    console.log("\n🚀 AFRI KERNEL BOOT STRAP INIT");

    runtime = await startAfriRuntime();

    const registryModules = afriRuntimeRegistry.list();

    const valid = (
      runtime &&
      runtime.modules.length === 16 &&
      registryModules.length === 16 &&
      runtime.ready === true
    );

    globalThis.__AFRI_KERNEL__ = runtime;

    return {
      status: valid ? "stable" : "broken",
      modules: runtime.modules.length,
      registry: registryModules.length,
      mode: runtime.mode
    };
  },

  async status() {
    return globalThis.__AFRI_KERNEL__ || { status: "not_booted" };
  },

  async run(module) {
    const r = globalThis.__AFRI_KERNEL__;

    if (!r) return { ok: false, error: "kernel_not_booted" };

    if (!r.modules.includes(module)) {
      return { ok: false, error: "module_not_found" };
    }

    return {
      ok: true,
      module,
      state: "active"
    };
  },

  async deploy(platform = "render") {
    const r = globalThis.__AFRI_KERNEL__;

    return {
      platform,
      mode: r?.mode || "unknown",
      modules: r?.modules?.length || 0,
      status: "deployment_ready",
      timestamp: Date.now()
    };
  },

  async health() {
    const r = globalThis.__AFRI_KERNEL__;

    return {
      kernel: r ? "stable" : "down",
      registry: afriRuntimeRegistry.list().length === 16 ? "ok" : "dirty",
      runtime: r?.ready ? "active" : "inactive",
      modules: r?.modules?.length || 0
    };
  },

  reset() {
    runtime = null;
    globalThis.__AFRI_KERNEL__ = null;
    return { ok: true, state: "reset" };
  }
};
