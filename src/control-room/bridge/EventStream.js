const EventStream = {
  listeners: [],
  emit(event) {
    this.listeners.forEach(fn => fn(event));
  },
  on(fn) {
    this.listeners.push(fn);
  }
};
export default EventStream;
