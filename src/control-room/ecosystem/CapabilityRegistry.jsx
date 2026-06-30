const Capabilities = new Map();

const CapabilityRegistry = {
  register(capability) {
    if (!capability?.id) return false;
    Capabilities.set(capability.id, capability);
    return true;
  },

  get(id) {
    return Capabilities.get(id);
  },

  has(id) {
    return Capabilities.has(id);
  },

  all() {
    return Array.from(Capabilities.values());
  }
};

[
  { id:"command.execute", name:"Execute Commands" },
  { id:"voice.listen", name:"Voice Input" },
  { id:"voice.speak", name:"Voice Output" },
  { id:"notification.push", name:"Notifications" },
  { id:"conversation.memory", name:"Conversation Memory" },
  { id:"module.launch", name:"Module Launcher" },
  { id:"context.resolve", name:"Context Resolution" }
].forEach(CapabilityRegistry.register);

export default CapabilityRegistry;
