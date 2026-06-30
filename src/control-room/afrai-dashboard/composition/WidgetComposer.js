class WidgetComposer {
  constructor() {
    this.widgets = new Map();
    this.activeWidgets = new Map();
  }

  register(widget) {
    if (!widget || !widget.id) {
      throw new Error('Invalid widget');
    }

    this.widgets.set(widget.id, widget);
    return widget;
  }

  compose(widgetId, props = {}) {
    const widget = this.widgets.get(widgetId);
    if (!widget) throw new Error('Widget not found: ' + widgetId);

    const instance = {
      ...widget,
      props,
      status: 'active',
      renderedAt: Date.now()
    };

    this.activeWidgets.set(widgetId, instance);

    if (typeof widget.onRender === 'function') {
      widget.onRender(instance);
    }

    return instance;
  }

  remove(widgetId) {
    const instance = this.activeWidgets.get(widgetId);
    if (!instance) return false;

    if (typeof instance.onDestroy === 'function') {
      instance.onDestroy(instance);
    }

    this.activeWidgets.delete(widgetId);
    return true;
  }

  getActiveWidgets() {
    return Array.from(this.activeWidgets.values());
  }
}

export default WidgetComposer;
