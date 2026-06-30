// AfriAI Kernel v1 - Core Execution Gateway
export class AfriKernel {
  constructor({ transport, router, validator }) {
    this.transport = transport;
    this.router = router;
    this.validator = validator;
  }

  async send(intent, payload = {}) {
    if (!this.validator(payload)) {
      throw new Error("AfriKernel: Payload rejected by validator");
    }

    const endpoint = this.router.resolve(intent);

    return this.transport.request(endpoint, {
      intent,
      payload
    });
  }
}
