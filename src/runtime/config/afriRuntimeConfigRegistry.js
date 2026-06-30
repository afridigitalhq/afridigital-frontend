const config={mode:"production",platform:"render",registry:"active",telemetry:"enabled",runtime:"stable"};

export function readConfig(){return {...config};}

export function getConfig(key){return config[key]??null;}
