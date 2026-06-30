const capabilities=["kernel","state","history","events","dispatcher","logger","metrics","snapshot","health","diagnostics"];

export function readCapabilities(){return [...capabilities];}

export function hasCapability(name){return capabilities.includes(name);}
