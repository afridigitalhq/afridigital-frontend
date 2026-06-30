export function createNotification(data={}) {
  return {
    id: data.id || Date.now(),
    source: data.source || "AfriAI",
    category: data.category || "general",
    priority: data.priority || "normal",
    title: data.title || "",
    message: data.message || "",
    read: data.read || false,
    ts: data.ts || new Date().toISOString()
  };
}
