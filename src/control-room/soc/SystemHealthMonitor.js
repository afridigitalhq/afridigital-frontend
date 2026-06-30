const SystemHealthMonitor = {
  state: {
    status: "unknown"
  },

  setStatus(status) {
    this.state.status = status;
  },

  getStatus() {
    return this.state.status;
  }
};

export default SystemHealthMonitor;
