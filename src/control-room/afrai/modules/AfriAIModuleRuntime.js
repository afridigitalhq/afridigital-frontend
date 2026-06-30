import ModuleMountEngine from "./ModuleMountEngine";

const AfriAIModuleRuntime = {
  resolve(intent) {
    const capabilities = ModuleMountEngine.discover();

    const matches = Object.keys(capabilities).filter((mod) =>
      intent.toLowerCase().includes(mod.toLowerCase())
    );

    return matches.map((module) => ModuleMountEngine.mount(module));
  },

  requestUnmount(moduleName) {
    return ModuleMountEngine.proposeUnmount(moduleName);
  }
};

export default AfriAIModuleRuntime;
