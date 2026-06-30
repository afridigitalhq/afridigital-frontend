/* Afri Runtime Entry */

import initializeAfriRuntime from "./initializeRuntime.js";

let runtimeInstance = null;

export function getRuntime() {
  if (!runtimeInstance) {
    runtimeInstance = initializeAfriRuntime();
  }
  return runtimeInstance;
}

export default getRuntime;
