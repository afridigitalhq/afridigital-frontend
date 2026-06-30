/* AfriAI Unified Event Bus */

class AfriEventBus {
  constructor() {
    this.listeners = new Map();
  }

  subscribe(type, handler) {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type).add(handler);
    return () => this.listeners.get(type)?.delete(handler);
  }

  publish(event) {
    const handlers = this.listeners.get(event.type);
    if (!handlers) return;
    handlers.forEach(fn => fn(event));
  }
}

export const afriEventBus = new AfriEventBus();
