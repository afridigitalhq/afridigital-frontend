import { useEffect, useState } from "react";
import AIStateManager from "../state/AIStateManager";

export default function useAIState() {
  const [state, setState] = useState(AIStateManager.getState());

  useEffect(() => {
    return AIStateManager.subscribe(setState);
  }, []);

  return {
    state,
    update: (update) => AIStateManager.setState(update)
  };
}
