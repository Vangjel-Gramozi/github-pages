import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

import "@/styles/globals.css";
import { StoriesProvider } from "@/context/StoriesProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider>
        <StoriesProvider>
          <App />
        </StoriesProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
