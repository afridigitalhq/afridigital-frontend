const _global = typeof _global !== "undefined" ? _global : window;
const GLOBAL_KEY = '__AFRI_RUNTIME_REGISTRY__';

class AfriRuntimeRegistryClass {
  constructor() {
    if (!typeof _global !== "undefined" ? _global : window[GLOBAL_KEY]) {
      if (typeof _global !== "undefined") { _global.set(GLOBAL_KEY, new Map()); } else { window[GLOBAL_KEY] = new Map(); }
    }
    this.store = typeof _global !== "undefined" ? _global : window[GLOBAL_KEY];
  }

  register(name, module) {
// cleaned-expression
  }

  get(name) {
// cleaned-expression
  }

  list() {
// cleaned-expression
  }

  clear() {
// cleaned-expression
  }
}

export const afriRuntimeRegistry = new AfriRuntimeRegistryClass();
