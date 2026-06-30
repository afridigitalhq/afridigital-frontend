window.__AFRII_EXECUTE__ = (cmd) => { if (window.__AFRII_DOCK__) return window.__AFRII_DOCK__.execute(cmd); return { status: "dock_not_ready" }; };

window.__AFRII_FEED__ = {
  logs: [],
  push(log) {
    this.logs.push(log);
    console.log('📡 FEED:', log);
  }
};


const engine = window.__AFRII_ENGINE__;
const dock = new CommandDock(engine);
window.__AFRII_DOCK__ = dock;

import CommandDock from './command-dock';
import CompositionEngine from './composition';
import ModuleComposer from './ModuleComposer';
