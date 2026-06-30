const ModuleSwitcher = {
  active: null,

  set(moduleName) {
    this.active = moduleName;
    return this.active;
  },

  get() {
    return this.active;
  }
};

export default ModuleSwitcher;
