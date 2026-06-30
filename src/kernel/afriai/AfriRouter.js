export const AfriRouter = {
  map: {
    "chat": "/api/chat",
    "dag:update": "/api/dag/update",
    "system:metrics": "/api/system/metrics"
  },

  resolve(intent) {
    return this.map[intent] || "/api/kernel";
  }
};
