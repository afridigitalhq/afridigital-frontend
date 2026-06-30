const metrics={boot:0,run:0,deploy:0,health:0};

export function recordMetric(type){if(type in metrics)metrics[type]++;}

export function readMetrics(){return {...metrics};}

export function resetMetrics(){Object.keys(metrics).forEach(k=>metrics[k]=0);}
