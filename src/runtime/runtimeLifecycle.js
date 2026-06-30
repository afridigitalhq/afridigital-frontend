/* Afri Runtime Lifecycle */

const lifecycle = [];

export function recordRuntimeLifecycle(stage, details = {}) {
  lifecycle.push({
    stage,
    timestamp: Date.now(),
    ...details
  });
}

export function getRuntimeLifecycle() {
  return [...lifecycle];
}

export function clearRuntimeLifecycle() {
  lifecycle.length = 0;
}
