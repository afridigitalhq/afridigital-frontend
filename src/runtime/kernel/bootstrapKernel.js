import { startAfriRuntime } from "../startAfriRuntime.js";
import { validateKernel } from "./validateKernel.js";

export async function bootstrapKernel() {

  console.log("\n🚀 AFRI SINGLE BOOTSTRAP INIT");

  await startAfriRuntime();

  const report = await validateKernel();

  console.log("\n📊 KERNEL REPORT");
  console.log(report.snapshot);

  console.log("\n🧪 VALIDATION");
  console.log(report.checks);

  console.log(
    "\n📦 STATUS:",
    report.valid ? "STABLE ✅" : "BROKEN ❌"
  );

  process.exit(report.valid ? 0 : 1);
}
