/* AfriAI WebSocket Runtime Adapter */

import { afriEventBus } from "./AfriEventBus.js";
import { createRuntimeEvent } from "./AfriRuntimeContract.js";

export function attachRuntimeSocket(socket) {
  socket.onmessage = ({ data }) => {
    afriEventBus.publish(
      createRuntimeEvent({
        type: "WS_MESSAGE",
        action: "RECEIVED",
        payload: data,
        source: "websocket"
      })
    );
  };

  return socket;
}
