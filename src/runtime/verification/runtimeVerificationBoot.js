/* Afri Runtime Verification Boot Script */

import { afriRuntimeRegistry } from "../../core/runtime/AfriRuntimeRegistry.js";
import { afriEventBus } from "../../core/runtime/AfriEventBus.js";

export function bootRuntimeVerification() {
  const checks = [
    "registry", "eventbus", "pipeline", "orchestrator", "commandGate"
  ];

  const results = checks.map(check => {
    const exists = afriRuntimeRegistry?.get?.(check) ? true : false;

    afriEventBus?.emit?.("runtime.verification", {
      check,
      status: exists ? "ok" : "missing"
    });

    return { check, status: exists ? "ok" : "missing" };
  });

  const failed = results.filter(r => r.status !== "ok");

  afriEventBus?.emit?.("runtime.verification.complete", {
    success: failed.length === 0,
    results
  });

  return { success: failed.length === 0, results };
}
