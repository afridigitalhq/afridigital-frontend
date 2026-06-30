import SystemHandshake from "./SystemHandshake";

const DeploymentGate = {
  async validate() {
    const result = await SystemHandshake.verify();

    return {
      ready: result.status === "connected",
      backend: result.backend
    };
  }
};

export default DeploymentGate;
