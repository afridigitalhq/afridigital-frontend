class AfriAIWidgetRegistry {
  constructor() {
    this.widgets = new Map();
  }

  register(widget) {
    if (!widget || !widget.id) return false;
    this.widgets.set(widget.id, widget);
    return true;
  }

  get(id) {
    return this.widgets.get(id);
  }

  getAll() {
    return Array.from(this.widgets.values());
  }
}

export default AfriAIWidgetRegistry;
