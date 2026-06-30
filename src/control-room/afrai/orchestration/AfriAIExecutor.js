import EventStream from "../../bridge/EventStream";
import ModuleRegistry from "../../modules/ModuleRegistry";

const AfriAIExecutor = {
  execute(decision) {
    const { action, analysis } = decision;

    let result = null;

    if (action === "route_to_module") {
      const module = analysis.matchedModules?.[0]?.name;

      result = {
        routedTo: module,
        instance: ModuleRegistry.get(module)
      };
    }

    if (action === "initialize_system") {
      result = { system: "initialized" };
    }

    if (action === "query_soc") {
      result = { soc: "status_requested" };
    }

    EventStream.emit({
      type: "AFRAI_EXECUTION",
      payload: {
        action,
        result
      }
    });

    return result;
  }
};

export default AfriAIExecutor;
