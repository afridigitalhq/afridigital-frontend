const deps={kernel:["state","history","events"],diagnostics:["health","metrics","snapshot"],health:["metrics"],events:["dispatcher","logger"]};

export function readDependencies(){return JSON.parse(JSON.stringify(deps));}

export function getDependencies(name){return deps[name]??[];}
