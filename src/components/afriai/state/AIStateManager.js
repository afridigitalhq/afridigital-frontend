import { initialAIState } from "./AIState";

class AIStateManager {
  constructor() {
    this.state = { ...initialAIState };
    this.listeners = new Set();
  }

  getState() {
    return this.state;
  }

  setState(update) {
    this.state = { ...this.state, ...update };
    this.listeners.forEach(listener => listener(this.state));
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export default new AIStateManager();
