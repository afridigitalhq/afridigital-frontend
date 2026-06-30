  try {
    if (typeof raw !== "string") return raw;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

  return (d && typeof d === "object" && d.type && d.action) ? d : null;
};

export const normalizeAfriAIEvent = (raw) => {
  if (!valid) return null;

  return {
    type: valid.type,
    node: valid.node || null,
    action: valid.action,
    payload: valid.payload || null,
    timestamp: Date.now()
  };
};
