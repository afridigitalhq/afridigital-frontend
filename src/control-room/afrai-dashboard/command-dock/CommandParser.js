
import CommandRegistry from './CommandRegistry.js';

class CommandParser {
  constructor() {
    this.registry = new CommandRegistry();
  }

  parse(input) {
    const parts = input.trim().split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    if (!this.registry.isAllowed(command)) {
      return { allowed: false, command };
    }

    return {
      allowed: true,
      command,
      args
    };
  }
}

export default CommandParser;
