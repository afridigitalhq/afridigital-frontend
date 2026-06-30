import fs from "fs";
import path from "path";
import { AFRI_STORAGE } from "../runtimeRoot.js";

const HISTORY_PATH = path.join(AFRI_STORAGE, "history.json");

function ensureFile() {
  if (!fs.existsSync(AFRI_STORAGE)) {
    fs.mkdirSync(AFRI_STORAGE, { recursive: true });
  }
  if (!fs.existsSync(HISTORY_PATH)) {
    fs.writeFileSync(HISTORY_PATH, "[]");
  }
}

export function clearHistory() {
  ensureFile();
  fs.writeFileSync(HISTORY_PATH, "[]");
}

export function appendHistory(command, meta = {}) {
  ensureFile();
  const history = JSON.parse(fs.readFileSync(HISTORY_PATH, "utf8"));
  history.push({
    timestamp: new Date().toISOString(),
    command,
    ...meta
  });
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2));
}

export function readHistory() {
  ensureFile();
  return JSON.parse(fs.readFileSync(HISTORY_PATH, "utf8"));
}
