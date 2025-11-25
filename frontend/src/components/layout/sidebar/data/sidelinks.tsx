/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unused-vars */
// DEPENDENCIES
import type { JSX } from "react";
import {
  IconChecklist,
  IconHelpHexagon,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHome,
  IconSettings,
  IconUserShield,
  IconLogin2,
  IconFile3d,
  IconPointFilled,
} from "@tabler/icons-react";
import { User2Icon } from "lucide-react";

// DATA
export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon: JSX.Element;
  text?: string;
}

export interface SideLink extends NavLink {
  sub?: Array<NavLink>;
}

const keys = [
  "home",
  "modules",
  "options",
  "account",
  "profile",
  "guild",
  "spot",
  "out",
  "sup",
  "settings",
  "example",
] as const;

type Key = (typeof keys)[number];

export const getSidelinks = (
  t: ((key: string) => string) | string | Array<string>
): Array<SideLink> => {
  const getText = (key: Key | string, index: number): string => {
    if (typeof t === "function") return t(`navbar.${key}`);
    if (Array.isArray(t)) return t[index] ?? key;
    if (typeof t === "string") return t;
    return key;
  };
  let activeModules: Array<string> = [];
  if (typeof window !== "undefined") {
    try {
      const storedModules = localStorage.getItem("activeModules");
      if (storedModules) {
        const parsedModules = storedModules.split(",");
        if (
          Array.isArray(parsedModules) &&
          parsedModules.every((item) => typeof item === "string")
        ) {
          activeModules = parsedModules;
        }
      }
    } catch (error) {
      console.error("Error al parsear activeModules de localStorage:", error);
    }
  }
  const links: Array<SideLink> = [
    {
      title: getText("home", 1),
      href: "/",
      icon: <IconHome size={18} />,
    },
    {
      title: getText("modules", 1),
      href: "/modules",
      icon: <IconChecklist size={18} />,
    },
  ];
  if (activeModules.length > 0) {
    links.push({
      title: getText("options", 1),
      href: "",
      icon: <IconFile3d size={18} />,
      sub: activeModules.map((moduleName, index) => ({
        title: getText(moduleName, index),
        href: `/${moduleName.toLowerCase()}`,
        icon: <IconPointFilled size={18} />,
      })),
    });
  }
  links.push(
    {
      title: getText("account", 1),
      href: "",
      icon: <IconUserShield size={18} />,
      sub: [
        {
          title: getText("profile", 1),
          href: "/profile",
          icon: <IconHexagonNumber1 size={18} />,
        },
        {
          title: getText("guild", 1),
          href: "/guild",
          icon: <IconHexagonNumber2 size={18} />,
        },
        {
          title: getText("spot", 1),
          href: "/spot",
          icon: <IconHexagonNumber3 size={18} />,
        },
        {
          title: getText("account", 1),
          href: "/account",
          icon: <User2Icon size={18} />,
        },
        {
          title: getText("out", 1),
          href: "/logout",
          icon: <IconLogin2 size={18} />,
        },
      ],
    },
    {
      title: getText("sup", 1),
      href: "/support",
      icon: <IconHelpHexagon size={18} />,
    },
    {
      title: getText("settings", 1),
      href: "/settings",
      icon: <IconSettings size={18} />,
    }
  );
  return links;
};
