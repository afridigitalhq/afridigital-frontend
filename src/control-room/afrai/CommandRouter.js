import AfriAINLPBridge from "./AfriAINLPBridge";

const CommandRouter = {
  send(commandText) {
    return AfriAINLPBridge.process(commandText);
  }
};

export default CommandRouter;
