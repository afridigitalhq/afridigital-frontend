const handlers=new Map();

export function registerHandler(type,handler){if(!handlers.has(type))handlers.set(type,[]);handlers.get(type).push(handler);}

export function dispatch(event){const list=handlers.get(event.type)||[];for(const fn of list){fn(event);}return list.length;}

export function clearHandlers(){handlers.clear();}

export function handlerCount(type){return (handlers.get(type)||[]).length;}
