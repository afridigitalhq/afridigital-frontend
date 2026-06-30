const modules=["AfriVision","AfriMetaWorld","AfriCommerce","AfriBoost","AfriComm","AfriSports","AfriLove","Fmdash"];
export function resolveModule(pathname=window.location.pathname){
  return modules.find(m=>pathname.toLowerCase().includes(m.toLowerCase()))||"AfriDigital";
}
