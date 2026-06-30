const environment={runtime:"AfriRuntime",environment:"production",platform:"render",engine:"node",node:process.version};

export function readEnvironment(){return {...environment};}

export function getEnvironment(key){return environment[key]??null;}
