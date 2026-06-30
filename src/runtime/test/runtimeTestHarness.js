/* Afri Runtime Test Harness */

import { afriEventBus } from "../../core/runtime/AfriEventBus.js";
import { executeCommand } from "../command/runtimeCommandGate.js";

export function runRuntimeTest() {
  const testCommand = {
    type: "TEST_COMMAND",
    payload: { source: "test_harness" }
  };

  const results = [];

  afriEventBus.on("runtime:command:received", (e) => results.push({ stage: "received", e }));
  afriEventBus.on("runtime:pipeline:stage", (e) => results.push({ stage: "pipeline", e }));
  afriEventBus.on("dag:node:created", (e) => results.push({ stage: "dag", e }));

  executeCommand(testCommand, { handlers: { TEST_COMMAND: () => ({ ok: true }) } });

  return results;
}
