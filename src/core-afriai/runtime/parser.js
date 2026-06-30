  try {
    return typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch {
    return null;
  }
};

  if (!d || typeof d !== "object") return null;
  if (!d.type || !d.action) return null;
  return d;
};
