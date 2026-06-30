const events = [];

export function emit(type, payload = {}) {
  events.push({
    timestamp: new Date().toISOString(),
    type,
    ...payload
  });
}

export function readEvents() {
  return [...events];
}

export function clearEvents() {
  events.length = 0;
}
