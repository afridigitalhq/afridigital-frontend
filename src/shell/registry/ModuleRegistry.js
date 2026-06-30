const ModuleRegistry = {
  modules: new Map(),

  register(module) {
    this.modules.set(module.id, module);
  },

  unregister(id) {
    this.modules.delete(id);
  },

  get(id) {
    return this.modules.get(id);
  },

  getAll() {
    return Array.from(this.modules.values());
  },

  isRegistered(id) {
    return this.modules.has(id);
  }
};

export default ModuleRegistry;
