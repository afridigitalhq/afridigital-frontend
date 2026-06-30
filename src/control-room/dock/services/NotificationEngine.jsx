const NotificationEngine = {
  notifications: [],

  push(title, message, level = "info") {
    const item = {
      id: Date.now(),
      title,
      message,
      level,
      timestamp: new Date().toISOString()
    };

    this.notifications.unshift(item);
    return item;
  },

  all() {
    return this.notifications;
  },

  clear() {
    this.notifications = [];
  }
};

export default NotificationEngine;
