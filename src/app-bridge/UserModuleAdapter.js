import EcosystemBridge from "./EcosystemBridge";

const UserModuleAdapter = {
  load(name, module) {
    return EcosystemBridge.registerModule(name, module);
  }
};

export default UserModuleAdapter;
