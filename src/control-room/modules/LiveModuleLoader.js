import ModuleRegistry from "./ModuleRegistry";
import EventStream from "../bridge/EventStream";

const LiveModuleLoader = {
  load(name, module) {
    ModuleRegistry.register(name, module);

    EventStream.emit({
      type: "MODULE_REGISTERED",
      module: name
    });

    return { loaded: name };
  },

  activate(name) {
    const mod = ModuleRegistry.get(name);

    EventStream.emit({
      type: "MODULE_ACTIVATED",
      module: name
    });

    return mod;
  }
};

export default LiveModuleLoader;
