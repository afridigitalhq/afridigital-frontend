/* AfriAI Runtime Health Monitor */

class AfriRuntimeHealth {
  constructor() {
    this.status = new Map();
  }

  update(name, state) {
    this.status.set(name, {
      state,
      timestamp: Date.now()
    });
  }

  get(name) {
    return this.status.get(name);
  }

  snapshot() {
    return Object.fromEntries(this.status);
  }
}

export const afriRuntimeHealth = new AfriRuntimeHealth();
