import { useEffect } from "react";

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
