import ControlRoomBootstrap from "../bootstrap/ControlRoomBootstrap";
import DeploymentGate from "../deploy/DeploymentGate";
import SystemHandshake from "../deploy/SystemHandshake";
import ControlRoomRuntime from "../runtime/ControlRoomRuntime";
import DashboardController from "../dashboard/DashboardController";
import EcosystemBootstrap from "../modules/EcosystemBootstrap";
import AfriAIController from "../afrai/AfriAIController";
import SystemHealthMonitor from "../soc/SystemHealthMonitor";

const ProductionOrchestrator = {
  async start() {
    const gate = await DeploymentGate.validate();

    if (!gate.ready) {
      return {
        status: "blocked",
        reason: "backend_not_ready"
      };
    }

    ControlRoomRuntime.init();
    DashboardController.boot();
    EcosystemBootstrap.init();
    AfriAIController.execute("init");
    SystemHealthMonitor.setStatus("production");

    ControlRoomBootstrap.start();

    return {
      status: "production_online",
      backend: gate.backend
    };
  }
};

export default ProductionOrchestrator;
