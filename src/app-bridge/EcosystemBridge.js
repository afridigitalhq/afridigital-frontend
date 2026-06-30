import ModuleRegistry from "../control-room/modules/ModuleRegistry";
import EventStream from "../control-room/bridge/EventStream";

const EcosystemBridge = {
  registerModule(name, module) {
    ModuleRegistry.register(name, module);

    EventStream.emit({
      type: "ECOSYSTEM_MODULE_REGISTERED",
      module: name
    });

    return true;
  },

  listModules() {
    return ModuleRegistry.list();
  },

  activateModule(name) {
    const mod = ModuleRegistry.get(name);

    EventStream.emit({
      type: "ECOSYSTEM_MODULE_ACTIVATED",
      module: name
    });

    return mod;
  }
};

export default EcosystemBridge;
