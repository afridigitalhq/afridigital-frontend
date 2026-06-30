import ModuleBridge from "../integrations/ModuleBridge";

const ModuleLauncher = {
  launch(moduleName) {
    ModuleBridge.setCurrent(moduleName);

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("afri:moduleChanged", {
          detail: {
            module: moduleName
          }
        })
      );
    }

    return moduleName;
  },

  current() {
    return ModuleBridge.getCurrent();
  }
};

export default ModuleLauncher;
