/* Afri Runtime Context */

import getRuntime from "./runtimeEntry.js";

let runtimeContext = null;

export function getRuntimeContext() {
  if (!runtimeContext) {
    runtimeContext = {
      runtime: getRuntime(),
      initializedAt: Date.now(),
      services: {}
    };
  }

  return runtimeContext;
}

export function registerRuntimeService(name, service) {
  getRuntimeContext().services[name] = service;
}

export function getRuntimeService(name) {
  return getRuntimeContext().services[name];
}
