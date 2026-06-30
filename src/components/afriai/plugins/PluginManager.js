class PluginManager{
  constructor(){
    this.plugins=new Map();
  }

  register(plugin){
    if(!plugin || !plugin.id){
      throw new Error("Plugin must have an id.");
    }
    this.plugins.set(plugin.id,plugin);
  }

  unregister(id){
    this.plugins.delete(id);
  }

  get(id){
    return this.plugins.get(id);
  }

  getAll(){
    return [...this.plugins.values()];
  }

  activate(id){
    const plugin=this.plugins.get(id);
    if(plugin && typeof plugin.activate==="function"){
      plugin.activate();
    }
  }

  deactivate(id){
    const plugin=this.plugins.get(id);
    if(plugin && typeof plugin.deactivate==="function"){
      plugin.deactivate();
    }
  }
}

export default new PluginManager();
