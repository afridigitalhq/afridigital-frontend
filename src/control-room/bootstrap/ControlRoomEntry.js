import ControlRoomBootstrap from "./ControlRoomBootstrap";

const ControlRoomEntry = {
  launch() {
    return ControlRoomBootstrap.start();
  }
};

export default ControlRoomEntry;
