class EventBus{
  constructor(){
    this.events=new Map();
  }

  on(event,listener){
    if(!this.events.has(event)){
      this.events.set(event,new Set());
    }
    this.events.get(event).add(listener);
    return ()=>this.off(event,listener);
  }

  off(event,listener){
    if(this.events.has(event)){
      this.events.get(event).delete(listener);
    }
  }

  emit(event,payload){
    if(this.events.has(event)){
      this.events.get(event).forEach(listener=>listener(payload));
    }
  }
}

export default new EventBus();
