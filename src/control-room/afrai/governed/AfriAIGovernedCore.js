import AfriAICoreBrain from "../intelligence/AfriAICoreBrain";
import AfriAICrossBrain from "../cross-ecosystem/AfriAICrossBrain";
import SafeExecutionPipeline from "../safety/SafeExecutionPipeline";
import AfriAIOrchestrator from "../orchestration/AfriAIOrchestrator";
import EventStream from "../../bridge/EventStream";

const AfriAIGovernedCore = {
  handle(input) {
    // 1. Core reasoning
    const decision = AfriAICoreBrain.execute(input);

    // 2. Orchestration planning
    const orchestrated = AfriAIOrchestrator.run(input);

    // 3. Cross-ecosystem planning
    const crossPlan = AfriAICrossBrain.execute(input);

    const workflow = [
      ...(crossPlan || []),
      ...(orchestrated?.execution ? [orchestrated.execution] : [])
    ];

    // 4. Safe execution layer
    const execution = SafeExecutionPipeline.run(workflow, (wf) => {
      return {
        executedSteps: wf.length,
        status: "completed"
      };
    });

    // 5. Emit governed intelligence trace
    EventStream.emit({
      type: "AFRAI_GOVERNED_TRACE",
      payload: {
        input,
        decision,
        crossPlan,
        execution
      }
    });

    return {
      decision,
      crossPlan,
      execution
    };
  }
};

export default AfriAIGovernedCore;
