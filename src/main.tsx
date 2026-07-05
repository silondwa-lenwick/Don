import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./state/AppContext";
import "./styles.css";

// HashRouter keeps deep links working even when the app is opened from a static
// file or an offline cache with no server to handle routes.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </HashRouter>
  </React.StrictMode>
);
