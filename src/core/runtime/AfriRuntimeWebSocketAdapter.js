/* AfriAI Runtime WebSocket Adapter */

import { createRuntimeGateway } from "./AfriRuntimeGateway.js";

export function createRuntimeWebSocketAdapter(socket, modules = {}) {
  const gateway = createRuntimeGateway(modules);

  socket.onmessage = ({ data }) => {
    gateway.publish({
      type: "WS_MESSAGE",
      action: "receive",
      payload: data
    });
  };

  return gateway;
}
