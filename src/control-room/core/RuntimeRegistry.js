const RuntimeRegistry={
  modules:new Map(),
  features:new Map(),
  capabilities:new Map(),

  registerModule(module){
    if(module?.id) this.modules.set(module.id,module);
  },

  registerFeature(feature){
    if(feature?.id) this.features.set(feature.id,feature);
  },

  registerCapability(capability){
    if(capability?.id) this.capabilities.set(capability.id,capability);
  },

  snapshot(){
    return{
      modules:[...this.modules.values()],
      features:[...this.features.values()],
      capabilities:[...this.capabilities.values()]
    };
  }
};

if(typeof window!=="undefined"){
  window.__AFRI_RUNTIME_REGISTRY__=RuntimeRegistry;
}

export default RuntimeRegistry;
