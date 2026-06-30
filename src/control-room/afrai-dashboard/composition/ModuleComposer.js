class ModuleComposer {
  constructor() {
    this.registry = new Map();
    this.activeModules = new Map();
  }

  register(module) {
    if (!module || !module.id) {
      throw new Error('Invalid module');
    }
    this.registry.set(module.id, module);
    return module;
  }

  activate(moduleId, context = {}) {
    const module = this.registry.get(moduleId);
    if (!module) throw new Error('Module not found: ' + moduleId);

    const instance = {
      ...module,
      status: 'active',
      context,
      mountedAt: Date.now()
    };

    this.activeModules.set(moduleId, instance);

    if (typeof module.onMount === 'function') {
      module.onMount(instance);
    }

    return instance;
  }

  deactivate(moduleId) {
    const instance = this.activeModules.get(moduleId);
    if (!instance) return false;

    if (typeof instance.onUnmount === 'function') {
      instance.onUnmount(instance);
    }

    this.activeModules.delete(moduleId);
    return true;
  }

  getActiveModules() {
    return Array.from(this.activeModules.values());
  }
}

export default ModuleComposer;
