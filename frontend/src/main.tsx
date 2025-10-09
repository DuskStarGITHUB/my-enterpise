/* RENDER APP */

// DEPENDENCIES
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeUse from "@/components/main/ThemeUse.tsx";
import "./locales/i18n.ts";

// ROOT ELEMENT RENDER
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeUse />
    <App />
  </StrictMode>
);
