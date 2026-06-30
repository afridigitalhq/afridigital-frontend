import ModuleCapabilityMap from "./ModuleCapabilityMap";
import ModuleRegistry from "../../modules/ModuleRegistry";

const ModuleMountEngine = {
  mounted: {},

  discover() {
    return ModuleCapabilityMap.build();
  },

  mount(moduleName) {
    const module = ModuleRegistry.get(moduleName);

    if (!module) return null;

    this.mounted[moduleName] = {
      instance: module,
      status: "mounted"
    };

    return this.mounted[moduleName];
  },

  proposeUnmount(moduleName) {
    // ❗ NO DIRECT UNMOUNT ALLOWED
    return {
      module: moduleName,
      status: "pending_human_approval",
      action: "unmount_request"
    };
  },

  confirmUnmount(moduleName) {
    // ONLY CALL THIS AFTER HUMAN APPROVAL
    if (!this.mounted[moduleName]) return false;

    delete this.mounted[moduleName];

    return {
      module: moduleName,
      status: "unmounted"
    };
  },

  getMounted() {
    return this.mounted;
  }
};

export default ModuleMountEngine;
