import { getRuntime } from "../runtimeKernel.js";

export async function validateKernel() {
  const r = await getRuntime();

  const checks = {
    hasRuntime: !!r,
    hasModules: Array.isArray(r.modules),
    moduleCount: r.modules.length === 16,
    isReady: r.ready === true,
    hasVersion: !!r.version
  };

  const valid = Object.values(checks).every(Boolean);

  return {
    valid,
    checks,
    snapshot: {
      version: r.version,
      mode: r.mode,
      modules: r.modules.length
    }
  };
}
