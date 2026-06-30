import WorkflowEngine from "./WorkflowEngine";

const AfriAIWorkflowCore = {
  execute(intent) {
    return WorkflowEngine.run(intent);
  }
};

export default AfriAIWorkflowCore;
