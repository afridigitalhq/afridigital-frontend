import React,{useState} from "react";
import VoiceRegistry from "../../../control-room/dock/services/VoiceEngine";

export default function VoiceButton(){
  const [listening,setListening]=useState(false);

  function toggle(){
    if(listening){
      VoiceRegistry.stopListening();
      setListening(false);
    }else{
      VoiceRegistry.startListening();
      setListening(true);
    }
  }

  return(
    <button
      className="afriai-voice-button"
      onClick={toggle}
      title={listening?"Stop listening":"Talk to AfriAI"}
    >
      {listening?"🛑":"🎤"}
    </button>
  );
}
