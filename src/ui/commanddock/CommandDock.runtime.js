export function getCommandDockSnapshot() {
  return {
    events: [
      { type: "boot", status: "ok" },
      { type: "run", module: "dashboard" },
      { type: "deploy", platform: "render" }
    ],
    insights: {
      totalCommands: 10,
      boot: 3,
      run: 3,
      deploy: 3,
      health: 1
    },
    health: "healthy"
  };
}
