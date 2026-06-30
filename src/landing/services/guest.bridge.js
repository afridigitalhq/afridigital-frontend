import { sendAfriAI, getAfriAISocket } from "../../shell/commanddock/services/afriai.websocket";

export function sendGuestMessage(message){
  return sendAfriAI({
    message,
    mode:"guest"
  });
}

export function getGuestSocket(){
  return getAfriAISocket();
}
