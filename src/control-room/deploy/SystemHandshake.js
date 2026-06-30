import RenderContract from "./RenderContract";

const SystemHandshake = {
  async verify() {
    const health = await RenderContract.pingHealth();

    return {
      backend: health,
      status: health === "offline" ? "disconnected" : "connected"
    };
  }
};

export default SystemHandshake;
