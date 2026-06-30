import fs from "fs";
import path from "path";

const ROOTS = ["src/runtime", "src/core/runtime"];

function scan(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (f.endsWith(".js")) {
      const content = fs.readFileSync(full, "utf8");

      const badImports = content.match(/from\s+['"][^'"]+[^.js]['"]/g);
      if (badImports) {
        console.log("❌ Missing .js imports in:", full);
        badImports.forEach(i => console.log("   ->", i));
      }
    }
  }
}

console.log("🔍 Running runtime sanity check...");
ROOTS.forEach(scan);
console.log("✅ Scan complete");
