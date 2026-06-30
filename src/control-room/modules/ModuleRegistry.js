const ModuleRegistry = {
  modules: {},

  register(name, module) {
    this.modules[name] = module;
    return true;
  },

  get(name) {
    return this.modules[name] || null;
  },

  list() {
    return Object.keys(this.modules);
  }
};

export default ModuleRegistry;
