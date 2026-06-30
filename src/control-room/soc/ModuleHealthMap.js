const ModuleHealthMap = {
  modules: {},

  set(name, status) {
    this.modules[name] = status;
  },

  get(name) {
    return this.modules[name] || "unknown";
  },

  all() {
    return this.modules;
  }
};

export default ModuleHealthMap;
