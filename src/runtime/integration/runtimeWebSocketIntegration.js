/* AfriAI WebSocket Runtime Integration */

import { dispatchRuntimeEvent } from "../../core/runtime/AfriRuntimeConnector.js";

export function attachRuntimeToWebSocket(socket) {
  if (!socket) return;

  socket.onmessage = ({ data }) => {
    dispatchRuntimeEvent({
      type: "ws.message",
      action: "receive",
      payload: data
    });
  };
}
