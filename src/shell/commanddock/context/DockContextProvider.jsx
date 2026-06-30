import React,{createContext} from "react";
export const DockContext=createContext({});
export default function DockContextProvider({children}){
  return <DockContext.Provider value={{memory:false,voice:false}}>{children}</DockContext.Provider>;
}
