import EcosystemSOCBridge from "./EcosystemSOCBridge";

const EcosystemHealthFeed = {
  getFullReport() {
    return EcosystemSOCBridge.snapshot();
  },

  getLayer(layer) {
    return EcosystemSOCBridge.layerView(layer);
  }
};

export default EcosystemHealthFeed;
