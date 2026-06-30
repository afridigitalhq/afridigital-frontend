import React,{useEffect,useState} from "react";
import ConversationMemory from "../services/ConversationMemory";

export default function ConversationFeed(){
  const [messages,setMessages]=useState(ConversationMemory.all());

  useEffect(()=>{
    const id=setInterval(()=>{
      setMessages([...ConversationMemory.all()]);
    },500);
    return ()=>clearInterval(id);
  },[]);

  return(
    <div className="afriai-conversation-feed">
      {messages.map((m,i)=>(
        <div key={i} className={`afriai-msg ${m.role}`}>
          <strong>{m.role==="assistant"?"🤖 AfriAI":"👤 You"}:</strong> {m.text}
        </div>
      ))}
    </div>
  );
}
