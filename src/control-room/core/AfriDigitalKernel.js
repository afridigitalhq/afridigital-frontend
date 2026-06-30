import EcosystemRegistry from "../ecosystem/EcosystemRegistry";
import FeatureRegistry from "../ecosystem/FeatureRegistry";
import CapabilityRegistry from "../ecosystem/CapabilityRegistry";
import ModuleBridge from "../integrations/ModuleBridge";

const AfriDigitalKernel = {
  ecosystem() {
    return EcosystemRegistry.all();
  },

  features() {
    return FeatureRegistry.all();
  },

  capabilities() {
    return CapabilityRegistry.all();
  },

  currentModule() {
    return ModuleBridge.getCurrent();
  },

  snapshot() {
    return {
      module: this.currentModule(),
      ecosystem: this.ecosystem(),
      features: this.features(),
      capabilities: this.capabilities(),
      timestamp: Date.now()
    };
  }
};

if (typeof window !== "undefined") {
  window.__AFRI_KERNEL__ = AfriDigitalKernel;
}

export default AfriDigitalKernel;
