#!/usr/bin/env node

import { generateInsights } from "../insight/afriInsightEngine.js";

async function run() {
  console.log("\n🧠 AFRI INSIGHT ENGINE\n");

  const report = generateInsights();

  console.log("📊 SUMMARY");
  console.log(report.summary);

  console.log("\n⚠️ ALERTS");
  console.log(report.alerts.length ? report.alerts : "No anomalies detected");

  console.log("\n💡 SYSTEM HEALTH:", report.health);
}

run().catch(console.error);
