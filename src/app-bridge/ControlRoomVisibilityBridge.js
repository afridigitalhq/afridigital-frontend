import EcosystemBridge from "./EcosystemBridge";

const ControlRoomVisibilityBridge = {
  snapshot() {
    return {
      modules: EcosystemBridge.listModules()
    };
  }
};

export default ControlRoomVisibilityBridge;
