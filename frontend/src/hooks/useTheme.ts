/**
 * =====================================================
 *  NAME    : useTheme.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 23/09/2025
 *  DESCRIPTION: HOOK TO MANAGE THEME USING REDUX
 * =====================================================
 */

// DEPENDENCIES
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { Theme, setTheme } from "@/store/tasks/themeState";

// HOOK
export const useTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.current);
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);
  const toggle = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
    localStorage.setItem("theme", newTheme);
  };
  const set = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
    localStorage.setItem("theme", newTheme);
  };
  return { theme, toggle, set };
};
