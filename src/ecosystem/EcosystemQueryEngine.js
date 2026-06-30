import AfriDigitalRegistry from "./AfriDigitalRegistry";

const EcosystemQueryEngine = {
  list() {
    return Object.keys(AfriDigitalRegistry);
  },

  get(name) {
    return AfriDigitalRegistry[name] || null;
  },

  byLayer(layer) {
    return Object.entries(AfriDigitalRegistry)
      .filter(([_, v]) => v.layer === layer)
      .map(([k]) => k);
  }
};

export default EcosystemQueryEngine;
