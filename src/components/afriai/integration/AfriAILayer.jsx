import React,{useEffect} from "react";
import AfriAICommandBar from "../CommandBar/AfriAICommandBar";
import { bootstrapAfriAI } from "./AfriAIBootstrap";

export default function AfriAILayer(){

  useEffect(()=>{
    setTimeout(() => bootstrapAfriAI(), 0);
  },[]);

  return <AfriAICommandBar />;
}
