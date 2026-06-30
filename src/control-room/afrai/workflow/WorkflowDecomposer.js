import ModuleCapabilityMap from "../modules/ModuleCapabilityMap";

const WorkflowDecomposer = {
  decompose(intent) {
    const steps = [];

    const capabilities = ModuleCapabilityMap.build();

    Object.entries(capabilities).forEach(([module, meta]) => {
      meta.capabilities.forEach((cap) => {
        if (intent.toLowerCase().includes(cap)) {
          steps.push({
            module,
            capability: cap,
            action: "execute"
          });
        }
      });
    });

    return steps;
  }
};

export default WorkflowDecomposer;
