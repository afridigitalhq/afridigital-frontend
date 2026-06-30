const ModuleBridge = {
  current: "SOC",
  modules: [
    "SOC",
    "AfriAI",
    "AfriBank",
    "AfriWhatsApp",
    "AfriComm",
    "AfriVision",
    "DeviceTracking",
    "AfriBoost",
    "AfriCommerce",
    "AfriMetaWorld",
    "AfriSports"
  ],

  getCurrent() {
    return this.current;
  },

  setCurrent(moduleName) {
    if (this.modules.includes(moduleName)) {
      this.current = moduleName;
      if (typeof window !== "undefined") {
        window.__AFRI_CONTEXT__ = moduleName;
      }
    }
  },

  all() {
    return [...this.modules];
  }
};

if (typeof window !== "undefined") {
  window.__AFRI_CONTEXT__ = ModuleBridge.getCurrent();
}

export default ModuleBridge;
