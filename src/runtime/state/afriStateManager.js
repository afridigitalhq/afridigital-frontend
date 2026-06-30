import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 📌 ALWAYS anchor to THIS FILE location (not cwd)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// go up to afridigital-frontend root
const ROOT = path.resolve(__dirname, "../../../");

// final absolute state path
const STATE_PATH = path.join(ROOT, ".afri/state.json");

export function readState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
  } catch (e) {
    return {
      version: "1.0.0",
      bootCount: 0,
      lastBoot: null,
      lastCommand: null,
      lastModule: null,
      lastDeploy: null
    };
  }
}

export function updateState(update) {
  const state = readState();
  const newState = { ...state, ...update };
  fs.writeFileSync(STATE_PATH, JSON.stringify(newState, null, 2));
  return newState;
}
