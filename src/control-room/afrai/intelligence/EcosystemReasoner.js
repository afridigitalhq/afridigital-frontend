import AfriDigitalRegistry from "../../../ecosystem/AfriDigitalRegistry";

const EcosystemReasoner = {
  analyze(query) {
    const q = query.toLowerCase();

    const matches = Object.entries(AfriDigitalRegistry).filter(([name]) =>
      q.includes(name.toLowerCase())
    );

    return {
      intent: q,
      matchedModules: matches.map(([name, meta]) => ({
        name,
        layer: meta.layer
      }))
    };
  }
};

export default EcosystemReasoner;
