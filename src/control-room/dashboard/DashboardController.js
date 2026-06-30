import ModuleSwitcher from "./ModuleSwitcher";
import ControlRoomRuntime from "../runtime/ControlRoomRuntime";
import EventStream from "../bridge/EventStream";

const DashboardController = {
  boot() {
    ControlRoomRuntime.init();

    EventStream.emit({
      type: "DASHBOARD_BOOT",
      status: "active"
    });

    return true;
  },

  switchModule(name) {
    ModuleSwitcher.set(name);

    EventStream.emit({
      type: "MODULE_SWITCH",
      module: name
    });

    return name;
  }
};

export default DashboardController;
