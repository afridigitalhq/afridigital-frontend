/**
 * 🧠 AFRI COMMAND JOURNAL (READ-ONLY SYSTEM MEMORY)
 * NEVER executes anything. ONLY records state.
 */

const JOURNAL_KEY = "__AFRI_COMMAND_JOURNAL__";

function getStore() {
  if (!globalThis[JOURNAL_KEY]) {
    globalThis[JOURNAL_KEY] = [];
  }
  return globalThis[JOURNAL_KEY];
}

export function logCommand(entry) {
  const store = getStore();

  store.push({
    ...entry,
    timestamp: Date.now()
  });

  return true;
}

export function getHistory() {
  return getStore();
}

export function clearHistory() {
  globalThis[JOURNAL_KEY] = [];
  return { ok: true };
}

export function lastCommand() {
  const store = getStore();
  return store[store.length - 1] || null;
}
