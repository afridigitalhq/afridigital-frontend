import ModuleBridge from "../../integrations/ModuleBridge";

const listeners = new Set();

const DockContext = {
  current() {
    return {
      module: ModuleBridge.getCurrent(),
      context: typeof window !== "undefined" ? window.__AFRI_CONTEXT__ : "SOC"
    };
  },

  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  notify() {
    const state = this.current();
    listeners.forEach(listener => listener(state));
  }
};

if (typeof window !== "undefined") {
  window.addEventListener("afri:moduleChanged", () => {
    DockContext.notify();
  });
}

export default DockContext;
