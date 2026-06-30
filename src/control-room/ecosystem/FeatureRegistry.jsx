const Features = new Map();

const FeatureRegistry = {
  register(feature) {
    if (!feature?.id) return false;
    Features.set(feature.id, feature);
    return true;
  },

  get(id) {
    return Features.get(id);
  },

  all() {
    return Array.from(Features.values());
  },

  enabled(id) {
    return Features.has(id);
  }
};

[
  { id:"voice", name:"Voice Engine" },
  { id:"narrator", name:"Narrator" },
  { id:"notifications", name:"Notifications" },
  { id:"conversation", name:"Conversation Memory" },
  { id:"quickcommands", name:"Quick Commands" },
  { id:"analytics", name:"Analytics" },
  { id:"predictions", name:"Predictions" }
].forEach(FeatureRegistry.register);

export default FeatureRegistry;
