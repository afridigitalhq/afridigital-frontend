class CommandRegistry{
  constructor(){
    this.commands=new Map();
  }

  register(module,name,handler){
    if(!this.commands.has(module)){
      this.commands.set(module,new Map());
    }
    this.commands.get(module).set(name,handler);
  }

  unregister(module,name){
    if(this.commands.has(module)){
      this.commands.get(module).delete(name);
    }
  }

  execute(module,name,payload){
    const mod=this.commands.get(module);
    if(mod && mod.has(name)){
      return mod.get(name)(payload);
    }
    return null;
  }

  list(module){
    if(!this.commands.has(module)){
      return [];
    }
    return [...this.commands.get(module).keys()];
  }

  modules(){
    return [...this.commands.keys()];
  }
}

export default new CommandRegistry();
