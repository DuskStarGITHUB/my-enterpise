/**
 * =====================================================
 *  NAME    : ThemeUse.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 08/10/2025
 *  DESCRIPTION: READ THEME APPLY COLORS
 * =====================================================
 */

// DEPENDENCIES
import { useEffect } from "react";

// COMPONENT
const ThemeUse = () => {
  useEffect(() => {
    const themetype = localStorage.getItem("themetype");
    if (themetype) {
      if (themetype !== "Default") {
        import(`@/assets/css/theme/${themetype}.css`);
      } else {
        import("@/assets/css/theme/Default.css");
      }
      // console.log(`ThemeUse: ${themetype}`);
    } else {
      const themetype = "Default";
      localStorage.setItem("themetype", themetype);
      import("@/assets/css/theme/Default.css");
      // console.log(`ThemeUse: ${themetype}`);
    }
  }, []);
  return null;
};

export default ThemeUse;
