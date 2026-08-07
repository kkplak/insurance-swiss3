import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "./index.css";
import App from "./App";
import { ConsentAnalytics } from "./components/CookieConsent/CookieConsent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    <ConsentAnalytics />
  </React.StrictMode>
);
