import AfriDigitalRegistry from "../../../ecosystem/AfriDigitalRegistry";

const WorkflowPlanner = {
  plan(input) {
    const q = input.toLowerCase();

    const workflow = [];

    Object.entries(AfriDigitalRegistry).forEach(([name, meta]) => {
      if (q.includes(meta.layer) || q.includes(name.toLowerCase())) {
        workflow.push({
          module: name,
          layer: meta.layer,
          action: "activate"
        });
      }
    });

    return workflow;
  }
};

export default WorkflowPlanner;
