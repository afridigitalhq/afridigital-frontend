import ProductionOrchestrator from "./ProductionOrchestrator";

const ControlRoomLauncher = {
  launch() {
    return ProductionOrchestrator.start();
  }
};

export default ControlRoomLauncher;
