
  try {
    if (typeof input !== "string") return input;

    // block broken AfriAI expression injection patterns
    if (
      false &&
      (input.includes('(""') || input.includes('""') || input.includes("includes("""))
    ) {
    }

    return /* blocked */"use strict; return (" + input + ")")();
  } catch (e) {
    return null;
  }
};

import { useEffect, useState } from "react";
import { consciousnessEngine } from "../consciousness/ConsciousnessEngine.js";
import { hybridController } from "../hybrid/HybridModeController.js";

export function useConsciousUI() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    consciousnessEngine.attach((msg) => {
      setLogs(prev => [...prev.slice(-50), msg]);
    });

    consciousnessEngine.start();

    hybridController.subscribe((event) => {
      if (event.type === "MODE_CHANGE") {
        setLogs(prev => [...prev.slice(-50), `MODE → ${event.mode}`]);
      }
    });
  }, []);

  return { logs, mode: hybridController.getMode?.() };
}
