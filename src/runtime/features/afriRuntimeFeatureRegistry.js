const features={kernel:true,state:true,history:true,events:true,dispatcher:true,logger:true,metrics:true,snapshot:true,health:true,diagnostics:true};

export function readFeatures(){return {...features};}

export function hasFeature(name){return features[name]===true;}
