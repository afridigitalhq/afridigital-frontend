const modules=["afriai","devops","commanddock","dashboard","afrivision","afrimetaworld","africommerce","afriboost","africomm","afrisports","devicetracking","auth","identity","notifications","storage","analytics"];

export function readModules(){return [...modules];}

export function hasModule(name){return modules.includes(name);}
