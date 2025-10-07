/* RENDER APP */

// DEPENDENCIES
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ThemeUse from "@/components/containers/ThemeUse.tsx";
import "./index.css";
import "./locales/i18n.ts";

// ROOT ELEMENT RENDER
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeUse />
    <App />
  </StrictMode>
);
