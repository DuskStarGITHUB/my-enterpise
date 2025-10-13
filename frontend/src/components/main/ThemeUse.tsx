/**
 * =====================================================
 *  NAME    : ThemeUse.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: READ THEME APPLY COLORS
 * =====================================================
 */

// DEPENDENCIES
import { useEffect } from "react";

// COMPONENT
const ThemeUse = ():null => {
 useEffect(() => {
   let themetype = localStorage.getItem("themetype");
   if (!themetype) {
     themetype = "Default";
     localStorage.setItem("themetype", themetype);
   }
   const oldLink = document.getElementById("theme-css") as HTMLLinkElement;
   if (oldLink) oldLink.remove();
   const link = document.createElement("link");
   link.rel = "stylesheet";
   link.id = "theme-css";
   link.href = `/themes/${themetype}.css`;
   document.head.appendChild(link);
 }, []);

  return null;
};

export default ThemeUse;
