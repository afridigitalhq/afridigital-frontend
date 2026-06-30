const versions={kernel:"1.0.0",state:"1.0.0",history:"1.0.0",events:"1.0.0",dispatcher:"1.0.0",logger:"1.0.0",metrics:"1.0.0",snapshot:"1.0.0",health:"1.0.0",diagnostics:"1.0.0"};

export function readVersions(){return {...versions};}

export function getVersion(name){return versions[name]??null;}
