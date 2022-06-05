import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import TodoContextProvider from "context";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);

serviceWorkerRegistration.register();
