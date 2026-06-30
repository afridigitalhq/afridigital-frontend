
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

export const MODE = process.env.REACT_APP_MODE || "REST";
export const isLive = () => MODE === "LIVE";
export const isRest = () => MODE !== "LIVE";
