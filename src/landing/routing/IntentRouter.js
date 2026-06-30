export const IntentRoutes = {
  security: "AfriVision",
  sports: "AfriSports",
  commerce: "AfriCommerce",
  promotion: "AfriBoost",
  communication: "AfriComm",
  creation: "AfriMetaWorld"
};

export function resolveIntent(intent){
  return IntentRoutes[intent] || "AfriAI";
}

export function availableServices(){
  return Object.values(IntentRoutes);
}
