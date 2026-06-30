export const GoalCategories=[
{
id:"security",
examples:["cctv","camera","monitor","warehouse","security"],
route:"AfriVision"
},
{
id:"sports",
examples:["football","match","prediction","score","league","club"],
route:"AfriSports"
},
{
id:"commerce",
examples:["website","shop","store","domain","business","sell","ecommerce"],
route:"AfriCommerce"
},
{
id:"promotion",
examples:["advert","marketing","promote","customers","engagement"],
route:"AfriBoost"
},
{
id:"communication",
examples:["chat","whatsapp","message","support","communication"],
route:"AfriComm"
},
{
id:"creation",
examples:["virtual","community","metaverse","world","simulation","classroom","office","event","game","museum"],
route:"AfriMetaWorld"
}
];

export function classifyGoal(text=""){
const q=text.toLowerCase();
for(const group of GoalCategories){
if(group.examples.some(word=>q.includes(word))){
return group.route;
}
}
return "AfriAI";
}
