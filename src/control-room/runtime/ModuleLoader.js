const ModuleLoader = {
  modules: {},

  register(name, module) {
    this.modules[name] = module;
    return true;
  },

  get(name) {
    return this.modules[name] || null;
  }
};

export default ModuleLoader;
