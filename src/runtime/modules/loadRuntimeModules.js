import { AFRI_RUNTIME_MODULES } from "./AfriRuntimeModules.js";
import { AFRI_MODULE_MAP } from "./AfriModuleMap.js";
import { afriRuntimeRegistry } from "../../core/runtime/AfriRuntimeRegistry.js";

export async function loadRuntimeModules(extraModules = {}) {
  const loaded = {};

  console.log("🚀 MODULE LOADER START");

  for (const name of AFRI_RUNTIME_MODULES) {
    try {
      console.log("→ loading:", name);

      if (AFRI_MODULE_MAP[name]) {
        const mod = await AFRI_MODULE_MAP[name]();
        loaded[name] = mod?.default || mod;
      } else if (extraModules[name]) {
        loaded[name] = extraModules[name];
      } else {
        console.warn("⚠️ No module found:", name);
      }

    } catch (e) {
      console.error("❌ FAILED MODULE:", name, e.message);
    }
  }

  console.log("✅ LOADED COUNT:", Object.keys(loaded).length);

  for (const [name, module] of Object.entries(loaded)) {
    afriRuntimeRegistry.register(name, module);
  }

  const result = afriRuntimeRegistry.list();
  console.log("📦 REGISTRY FINAL:", result.length);

  return result;
}
