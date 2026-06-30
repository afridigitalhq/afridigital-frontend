import ModuleComposer from './ModuleComposer';
import WidgetComposer from './WidgetComposer';

class CompositionEngine {
  constructor() {
    this.modules = new ModuleComposer();
    this.widgets = new WidgetComposer();
  }

  registerModule(module) {
    return this.modules.register(module);
  }

  registerWidget(widget) {
    return this.widgets.register(widget);
  }

  activateModule(id, context = {}) {
    return this.modules.activate(id, context);
  }

  composeWidget(id, props = {}) {
    return this.widgets.compose(id, props);
  }

  getSystemState() {
    return {
      activeModules: this.modules.getActiveModules(),
      activeWidgets: this.widgets.getActiveWidgets()
    };
  }
}

export default CompositionEngine;
