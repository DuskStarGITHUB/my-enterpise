/**
 * =====================================================
 *  NAME    : ButtonTheme.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 09/10/2025
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
