export function AfriValidator(payload) {
  try {
    const str = JSON.stringify(payload);

    if (typeof payload !== "object") return false;
    if (str.includes('AfriAI""')) return false;
    if (str.includes('""\\"')) return false;
    if (str.includes("/* blocked */")) return false;
    if (str.includes("/* blocked */")) return false;

    return true;
  } catch (e) {
    return false;
  }
}
