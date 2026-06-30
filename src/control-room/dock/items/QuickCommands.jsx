import React from "react";
import CommandEngine from "../services/CommandEngine";

const COMMANDS={
  AfriDigital:["System Health","Open Dashboard","Show Notifications"],
  ControlRoom:["System Health","Security Scan","Runtime Status","Deploy"],
  AfriSports:["Today's Fixtures","Predictions","Live Matches"],
  AfriCommerce:["Orders","Products","Customers"],
  AfriVision:["Live Cameras","Alerts","Playback"]
};

export default function QuickCommands(){
  const ctx=window.__AFRI_CONTEXT__||{module:"AfriDigital"};
  const items=COMMANDS[ctx.module]||COMMANDS.AfriDigital;

  return(
    <div className="afriai-quick-commands">
      {items.map(cmd=>(
        <button key={cmd} onClick={()=>CommandEngine.execute(cmd)}>
          {cmd}
        </button>
      ))}
    </div>
  );
}
