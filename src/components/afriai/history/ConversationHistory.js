export default class ConversationHistory{
  constructor(){ this.items=[]; }
  add(role,message){ this.items.push({role,message,time:Date.now()}); }
  all(){ return this.items; }
  clear(){ this.items=[]; }
}
