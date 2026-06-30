import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";

import startAfriRuntime from "./runtime/startAfriRuntime.js";

// 🚀 Start Afri Runtime BEFORE React mounts
const runtime = startAfriRuntime();

// Expose runtime globally for debugging + DevOps dashboard
window.__AFRI_RUNTIME__ = runtime;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App runtime={runtime} />
  </React.StrictMode>
);

reportWebVitals();
