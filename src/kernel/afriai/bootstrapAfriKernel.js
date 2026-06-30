import { AfriKernel } from "./AfriKernel";
import { AfriRouter } from "./AfriRouter";
import { AfriValidator } from "./AfriValidator";
import { AfriTransport } from "./AfriTransport";

export function bootstrapAfriKernel() {
  return new AfriKernel({
    transport: AfriTransport,
    router: AfriRouter,
    validator: AfriValidator
  });
}
