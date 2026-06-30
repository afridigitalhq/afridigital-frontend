import AfriDigitalRegistry from "../../ecosystem/AfriDigitalRegistry";
import EcosystemQueryEngine from "../../ecosystem/EcosystemQueryEngine";
import ModuleHealthMap from "./ModuleHealthMap";
import EventStream from "../bridge/EventStream";

const EcosystemSOCBridge = {
  snapshot() {
    const products = EcosystemQueryEngine.list();

    const health = products.map((p) => {
      const meta = AfriDigitalRegistry[p];

      const status = ModuleHealthMap.get(p) || "unknown";

      return {
        name: p,
        layer: meta.layer,
        status
      };
    });

    EventStream.emit({
      type: "SOC_ECOSYSTEM_SNAPSHOT",
      payload: health
    });

    return health;
  },

  layerView(layer) {
    return EcosystemQueryEngine.byLayer(layer).map((name) => ({
      name,
      status: ModuleHealthMap.get(name) || "unknown"
    }));
  }
};

export default EcosystemSOCBridge;
