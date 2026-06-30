import { readEvents } from "./afriEventBus.js";

let registered=false;

export function registerSubscribers(){
  if(registered) return;
  registered=true;
  console.log("📡 Afri Event Subscribers Registered");
}

export function subscriberStatus(){
  return {
    registered,
    events: readEvents().length
  };
}
