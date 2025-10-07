/**
 * =====================================================
 *  NAME    : ThemeUse.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 07/10/2025
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
      if (themetype !== "default") {
        import(`@/assets/css/theme/${themetype}.css`);
      } else {
        import("@/assets/css/theme/Default.css");
      }
    } else {
      const themetype = "default";
      localStorage.setItem("themetype", themetype);
      import("@/assets/css/theme/Default.css");
    }
  }, []);
  return null;
};

export default ThemeUse;
