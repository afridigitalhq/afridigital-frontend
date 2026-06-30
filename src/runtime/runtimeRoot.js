import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// project root = afridigital-frontend
export const RUNTIME_ROOT = path.resolve(__dirname, "..");

// runtime storage folder
export const AFRI_STORAGE = path.join(RUNTIME_ROOT, ".afri");
