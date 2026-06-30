const logs=[];

export function logEvent(type,data={}){logs.push({timestamp:new Date().toISOString(),type,...data});}

export function readLogs(){return [...logs];}

export function clearLogs(){logs.length=0;}
