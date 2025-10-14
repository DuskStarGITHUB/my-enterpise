/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 *  NAME    : ButtonTheme.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 14/10/2025
 *  DESCRIPTION: BUTTON TO CHANGE THEME
 * =====================================================
 */

// DEPENDENCIES
import type React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

// LOGIC
type buttonThemeProps = {
  className?: string;
};

// BUTTON THEME
const ButtonTheme: React.FC<buttonThemeProps> = ({ className }) => {
  const { t } = useTranslation();
  const { theme, toggle } = useTheme();
  return (
    <Button
      className={`hover:cursor-pointer ${className}`}
      title="Toggle Theme"
      variant={"ghost"}
      onClick={toggle}
    >
      {t("ButtonTheme.theme")}: {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
export default ButtonTheme;
