import AfriDigitalRegistry from "../../../ecosystem/AfriDigitalRegistry";

const ModuleCapabilityMap = {
  build() {
    const map = {};

    Object.entries(AfriDigitalRegistry).forEach(([name, meta]) => {
      map[name] = {
        layer: meta.layer,
        capabilities: this.inferCapabilities(meta.layer)
      };
    });

    return map;
  },

  inferCapabilities(layer) {
    switch (layer) {
      case "finance":
        return ["wallet", "transfer", "audit"];
      case "communication":
        return ["message", "broadcast", "sync"];
      case "security":
        return ["monitor", "alert", "lockdown"];
      case "tracking":
        return ["locate", "trace", "history"];
      case "growth":
        return ["campaign", "boost", "analytics"];
      default:
        return ["generic_action"];
    }
  }
};

export default ModuleCapabilityMap;
