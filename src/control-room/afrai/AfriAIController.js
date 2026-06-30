import EventStream from "../bridge/EventStream";
import ModuleSwitcher from "../dashboard/ModuleSwitcher";
import ControlRoomRuntime from "../runtime/ControlRoomRuntime";

const AfriAIController = {
  execute(input) {
    const command = input.toLowerCase();

    // runtime control
    if (command.includes("init")) {
      ControlRoomRuntime.init();
      return "runtime_initialized";
    }

    // module switching
    if (command.startsWith("open ")) {
      const module = command.replace("open ", "").trim();
      ModuleSwitcher.set(module);

      EventStream.emit({
        type: "AFRI_AI_ROUTE",
        module
      });

      return `module_opened:${module}`;
    }

    // system status
    if (command.includes("status")) {
      EventStream.emit({
        type: "AFRI_AI_STATUS_REQUEST"
      });

      return "status_requested";
    }

    // fallback
    EventStream.emit({
      type: "AFRI_AI_UNKNOWN_COMMAND",
      input
    });

    return "command_not_recognized";
  }
};

export default AfriAIController;
