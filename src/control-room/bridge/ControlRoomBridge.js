const ControlRoomBridge = {
  status: "idle",
  connect() {
    this.status = "connected";
    return this.status;
  }
};
export default ControlRoomBridge;
