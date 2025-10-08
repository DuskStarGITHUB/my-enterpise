/**
 * =====================================================
 *  NAME    : ButtonTheme.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 25/09/2025
 *  DESCRIPTION: BUTTON TO CHANGE THEME
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

// LOGIC
type ButtonThemeProps = {
  t: (key: string) => string;
};

// BUTTON THEME
const ButtonTheme: React.FC<ButtonThemeProps> = ({ t }) => {
  const { theme, toggle } = useTheme();
  return (
    <Button
      variant={"ghost"}
      onClick={toggle}
      title="Toggle Theme"
      className="hover:bg-transparent text-white hover:text-white hover:cursor-pointer"
    >
      {t("ButtonTheme.theme")}: {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
export default ButtonTheme;
