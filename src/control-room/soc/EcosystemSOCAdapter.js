import EcosystemHealthFeed from "./EcosystemHealthFeed";

const EcosystemSOCAdapter = {
  runAudit() {
    return {
      timestamp: Date.now(),
      report: EcosystemHealthFeed.getFullReport()
    };
  }
};

export default EcosystemSOCAdapter;
