import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DarkModeContextProvider from "./context/darkModeContext";

const base = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
