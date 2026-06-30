/* AfriAI Runtime Gateway */

import { afriRuntimeKernel } from "./AfriRuntimeKernel.js";
import { afriEventBus } from "./AfriEventBus.js";

export function createRuntimeGateway(modules = {}) {
  const runtime = afriRuntimeKernel.boot(modules);

  return {
    runtime,
    publish: event => afriEventBus.publish(event),
    subscribe: (type, handler) => afriEventBus.subscribe(type, handler)
  };
}
