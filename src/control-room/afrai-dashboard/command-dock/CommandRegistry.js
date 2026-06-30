
class CommandRegistry {
  constructor() {
    this.commands = new Map([
      ['registerModule', true],
      ['activateModule', true],
      ['composeWidget', true]
    ]);
  }

  isAllowed(command) {
    return this.commands.has(command);
  }
}

export default CommandRegistry;
