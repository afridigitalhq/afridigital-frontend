export default function RouteRegistry(){ return null; }

import AfriAIDashboard from "../afrai/dashboard/AfriAIDashboard";

export const afriAIRoute = {
  id: "afrai",
  path: "/afrai",
  component: AfriAIDashboard,
  label: "AfriAI Intelligence"
};
