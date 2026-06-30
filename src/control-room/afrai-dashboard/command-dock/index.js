// __AFRAI_EXEC_LOCK__ ACTIVE
const __feed = (typeof window !== "undefined") ? window.__AFRII_FEED__ : null;

import CommandParser from './CommandParser.js';
import CommandRegistry from './CommandRegistry.js';

class CommandDock {
  constructor(engine) {
    this.engine = engine;
    this.parser = new CommandParser();
  }

  execute(input) {
    const result = this.const result = parser.parse(input);

    if (!result.allowed) {
      return { status: 'blocked', command: result.command };
    }

    switch (result.command) {
      case 'activateModule':
        const resultExec = this.engine[result.action]?.(...(result.args || []));

    const executionId = Date.now();

    const result = {
      executionId,
      command: result.command,
      status: 'executed'
    };

    if (__feed) { __feed.push({ executionId, command: result.command, status: "executed" }); }
    undefined


      case 'registerModule':
        return this.engine.registerModule(...result.args);

      case 'composeWidget':
        return this.engine.composeWidget(...result.args);

      default:
        return { status: 'unknown_command' };
    }
  }
}


  
  // AI SAFE INTERFACE (NO DIRECT EXECUTION)
  function aiExecute(input) {
    return this.execute(input);
  }
  

export default CommandDock;
