const RenderContract = {
  baseUrl: "https://afridigital-fmdash.onrender.com",

  endpoints: {
    health: "/health",
    status: "/status",
    control: "/control-room"
  },

  async pingHealth() {
    try {
      const res = await fetch(this.baseUrl + this.endpoints.health);
      return await res.text();
    } catch (e) {
      return "offline";
    }
  }
};

export default RenderContract;
