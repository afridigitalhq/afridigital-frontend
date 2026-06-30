import AfriDigitalRegistry from "../../ecosystem/AfriDigitalRegistry";

/**
 * SINGLE SOURCE OF TRUTH WRAPPER
 * Prevents future duplicate registry systems
 */

const RegistryContract = {
  getAll() {
    return AfriDigitalRegistry;
  },

  get(name) {
    return AfriDigitalRegistry[name] || null;
  }
};

export default RegistryContract;
