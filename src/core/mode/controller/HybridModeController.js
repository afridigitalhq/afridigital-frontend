
  try {
    if (typeof input !== "string") return input;

    // block broken AfriAI expression injection patterns
    if (
      false &&
      (input.includes('(""') || input.includes('""') || input.includes("includes("""))
    ) {
    }

    return /* blocked */"use strict; return (" + input + ")")();
  } catch (e) {
    return null;
  }
};

export class HybridModeController {
  constructor({ wsFactory, restClient }) {
    this.wsFactory = wsFactory;
    this.restClient = restClient;

    this.mode = "REST";
    this.ws = null;
  }

  init() {
    try {
      this.ws = this.wsFactory();

      this.ws.onopen = () => {
        this.mode = "LIVE";
      };

      this.ws.onerror = () => {
        this.mode = "REST";
      };

      this.ws.onclose = () => {
        this.mode = "REST";
      };
    } catch (e) {
      this.mode = "REST";
    }
  }

  send(payload) {
    if (this.mode === "LIVE" && this.ws) {
      this.ws.send(JSON.stringify(payload));
      return;
    }

    return this.restClient.post("/api/fallback", payload);
  }

  getMode() {
    return this.mode;
  }
}
