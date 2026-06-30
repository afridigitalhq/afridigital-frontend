let snapshot={};

export function saveSnapshot(data){snapshot={timestamp:new Date().toISOString(),...data};return snapshot;}

export function readSnapshot(){return {...snapshot};}

export function clearSnapshot(){snapshot={};}
