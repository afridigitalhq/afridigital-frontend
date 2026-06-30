const Registry = new Map();

const EcosystemRegistry = {
  register(module) {
    if (!module?.id) return false;
    Registry.set(module.id, module);
    return true;
  },

  get(id) {
    return Registry.get(id);
  },

  all() {
    return Array.from(Registry.values());
  },

  exists(id) {
    return Registry.has(id);
  }
};

[
  { id:"SOC", name:"SOC" },
  { id:"AfriAI", name:"AfriAI" },
  { id:"AfriBank", name:"AfriBank" },
  { id:"AfriWhatsApp", name:"AfriWhatsApp" },
  { id:"AfriComm", name:"AfriComm" },
  { id:"AfriVision", name:"AfriVision" },
  { id:"DeviceTracking", name:"Device Tracking" },
  { id:"AfriBoost", name:"AfriBoost" },
  { id:"AfriCommerce", name:"AfriCommerce" },
  { id:"AfriMetaWorld", name:"AfriMetaWorld" },
  { id:"AfriSports", name:"AfriSports" }
].forEach(EcosystemRegistry.register);

export default EcosystemRegistry;
