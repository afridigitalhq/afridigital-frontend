import React,{useEffect,useState} from "react";

export default function ContextPanel(){
  const [context,setContext]=useState({
    module:"AfriDigital",
    status:"Ready"
  });

  useEffect(()=>{
    const update=()=>{
      if(window.__AFRI_CONTEXT__){
        setContext(window.__AFRI_CONTEXT__);
      }
    };
    update();
    const id=setInterval(update,500);
    return()=>clearInterval(id);
  },[]);

  return(
    <div className="afriai-context-panel">
      <div><strong>Module:</strong> {context.module}</div>
      <div><strong>Status:</strong> {context.status}</div>
    </div>
  );
}
