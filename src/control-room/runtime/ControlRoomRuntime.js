import ControlRoomBridge from "../bridge/ControlRoomBridge";
import EventStream from "../bridge/EventStream";

const ControlRoomRuntime = {
  initialized: false,

  init() {
    this.initialized = true;
    ControlRoomBridge.connect();
    EventStream.emit({ type: "RUNTIME_INIT", status: "ok" });
    return this.initialized;
  },

  loadModule(moduleName) {
    EventStream.emit({ type: "MODULE_LOAD", module: moduleName });
    return { loaded: moduleName };
  }
};

export default ControlRoomRuntime;
