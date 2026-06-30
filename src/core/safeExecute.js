
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

window.safeExecute = (code) => { try { return JSON.parse(code); } catch(e) { console.error('Blocked AfriAI unsafe execution'); return null; } }
