import React,{createContext,useContext,useMemo,useState,useEffect} from "react";
import { subscribe } from "../events";

const NotificationContext=createContext(null);

export function NotificationProvider({children}){

const [notifications,setNotifications]=useState([]);

useEffect(()=>{
const off=subscribe(add);
return ()=>off();
},[]);

const value=useMemo(()=>({

notifications,

count:notifications.filter(n=>!n.read).length,

add(notification){
setNotifications(v=>[
{
id:Date.now(),
read:false,
ts:new Date().toISOString(),
...notification
},
...v
]);
},

markAllRead(){
setNotifications(v=>v.map(n=>({...n,read:true})));
},

clear(){
setNotifications([]);
}

}),[notifications]);

return(
<NotificationContext.Provider value={value}>
{children}
</NotificationContext.Provider>
);

}

export function useNotifications(){
return useContext(NotificationContext);
}
