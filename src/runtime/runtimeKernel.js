import { startAfriRuntime } from "./startAfriRuntime.js";

let runtime = null;
let booting = false;
let bootPromise = null;

export async function getRuntime() {

  // already booted → instant return
  if (runtime) return runtime;

  // already booting → wait same promise
  if (booting) return bootPromise;

  booting = true;

  bootPromise = (async () => {
    runtime = await startAfriRuntime();
    booting = false;
    return runtime;
  })();

  return bootPromise;
}

export function getRuntimeSync() {
  return runtime;
}

export function resetRuntime() {
  runtime = null;
  booting = false;
  bootPromise = null;
}
