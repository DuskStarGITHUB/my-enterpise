/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 *  NAME    : ButtonTheme.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: BUTTON TO CHANGE THEME
 * =====================================================
 */

// DEPENDENCIES
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

// BUTTON THEME
const ButtonTheme = () => {
  const { t } = useTranslation();
  const { theme, toggle } = useTheme();
  return (
    <Button
      className="hover:bg-transparent text-white hover:text-white hover:cursor-pointer"
      title="Toggle Theme"
      variant={"ghost"}
      onClick={toggle}
    >
      {t("ButtonTheme.theme")}: {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
export default ButtonTheme;
