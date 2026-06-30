const listeners=new Set();

export function subscribe(listener){
listeners.add(listener);
return()=>listeners.delete(listener);
}

export function publish(notification){
listeners.forEach(fn=>{
try{
fn(notification);
}catch(e){}
});
}

export function listenerCount(){
return listeners.size;
}
