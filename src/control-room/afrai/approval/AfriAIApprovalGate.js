/**
 * Human Approval Gate
 * Holds sensitive executions before allowing runtime execution
 */

const AfriAIApprovalGate = {
  queue: [],

  request(execution) {
    const item = {
      id: Date.now(),
      execution,
      status: "pending_approval"
    };

    this.queue.push(item);

    return item;
  },

  approve(id) {
    const item = this.queue.find((q) => q.id === id);
    if (!item) return null;

    item.status = "approved";
    return item;
  },

  reject(id) {
    const item = this.queue.find((q) => q.id === id);
    if (!item) return null;

    item.status = "rejected";
    return item;
  },

  getQueue() {
    return this.queue;
  }
};

export default AfriAIApprovalGate;
