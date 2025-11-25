/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-duplicate-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { JSX } from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Palette, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type ThemeType = "Default" | "DuskStar" | "Esmerald" | "Modern";

export const ThemeSelector = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themeType, setThemeType] = useState<ThemeType>("Default");
  const { t } = useTranslation();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const savedThemeType = localStorage.getItem(
      "themetype"
    ) as ThemeType | null;
    if (savedTheme) setTheme(savedTheme);
    if (savedThemeType) setThemeType(savedThemeType);
  }, []);
  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    window.location.reload();
  };
  const handleThemeTypeChange = (newThemeType: ThemeType) => {
    setThemeType(newThemeType);
    localStorage.setItem("themetype", newThemeType);
    window.location.reload();
  };
  const themeOptions: Array<{
    value: "light" | "dark";
    label: string;
    icon: JSX.Element;
  }> = [
    {
      value: "light",
      label: "Light",
      icon: <Monitor className="h-4 w-4" />,
    },
    {
      value: "dark",
      label: "Dark",
      icon: <Monitor className="h-4 w-4" />,
    },
  ];
  const themeTypeOptions: Array<{ value: ThemeType; label: string }> = [
    { value: "Default", label: "Default" },
    { value: "DuskStar", label: "DuskStar" },
    { value: "Esmerald", label: "Esmerald" },
    { value: "Modern", label: "Modern" },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">
          {t("settings-page.card-sub6")}
        </label>
        <div className="flex gap-2">
          {themeOptions.map((option) => (
            <Button
              key={option.value}
              size="sm"
              variant={theme === option.value ? "default" : "outline"}
              className={cn(
                "flex items-center gap-2 transition-all",
                theme === option.value && "border-primary"
              )}
              onClick={() => {
                handleThemeChange(option.value);
              }}
            >
              {option.icon}
              {option.label}
              {theme === option.value && <Check className="h-3 w-3" />}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          {t("settings-page.card-sub7")}
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full justify-start gap-2" variant="outline">
              <Palette className="h-4 w-4" />
              <span className="flex-1 text-left">{themeType}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {themeTypeOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                className="flex items-center justify-between"
                onClick={() => {
                  handleThemeTypeChange(option.value);
                }}
              >
                <span>{option.label}</span>
                {themeType === option.value && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="mt-4 rounded-lg border p-3 text-sm">
        <div className="font-medium">{t("settings-page.card-sub8")}: </div>
        <div className="mt-1 text-muted-foreground">
          {t("settings-page.card-sub9")}:{" "}
          <span className="text-foreground">{theme}</span>
        </div>
        <div className="text-muted-foreground">
          {t("settings-page.card-sub10")}:{" "}
          <span className="text-foreground">{themeType}</span>
        </div>
      </div>
    </div>
  );
};
