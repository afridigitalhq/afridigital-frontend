const ConversationMemory = {
  history: [],

  add(role, content) {
    this.history.push({
      id: Date.now(),
      role,
      content,
      timestamp: new Date().toISOString()
    });
  },

  all() {
    return this.history;
  },

  clear() {
    this.history = [];
  },

  latest(limit = 20) {
    return this.history.slice(-limit);
  }
};

export default ConversationMemory;
