const ExecutionTrace = {
  history: [],

  record(entry) {
    this.history.push({
      time: Date.now(),
      ...entry
    });
  },

  getAll() {
    return this.history;
  }
};

export default ExecutionTrace;
