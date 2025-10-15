/* eslint-disable @typescript-eslint/no-unused-vars */
// DEPENDENCIES
import type { JSX } from "react";
import {
  IconBrandProducthunt,
  IconCalendarWeek,
  IconChecklist,
  IconHelpHexagon,
  IconHexagonNumber1,
  IconHexagonNumber3,
  IconHome,
  IconMessages,
  IconSettings,
  IconShoppingCart,
  IconUserShield,
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
  "products",
  "product",
  "addProduct",
  "chats",
  "order",
  "calendar",
  "tasks",
  "supports",
  "authentication",
  "signInEmailPassword",
  "signUp",
  "users",
  "settings",
] as const;

type Key = (typeof keys)[number];

export const getSidelinks = (
  t: ((key: string) => string) | string | Array<string>
): Array<SideLink> => {
  const getText = (key: Key, index: number): string => {
    if (typeof t === "function") return t(`navbar.${key}`);
    if (Array.isArray(t)) return t[index] ?? key;
    if (typeof t === "string") return t;
    return key;
  };
  return [
    {
      title: getText("home", 0),
      label: "",
      href: "/",
      icon: <IconHome size={18} />,
    },
    {
      title: getText("products", 1),
      label: "",
      href: "",
      icon: <IconChecklist size={18} />,
      sub: [
        {
          title: getText("product", 2),
          label: "",
          href: "/product",
          icon: <IconBrandProducthunt size={18} />,
        },
        {
          title: getText("addProduct", 3),
          label: "",
          href: "/product/add-product",
          icon: <IconHexagonNumber1 size={18} />,
        },
      ],
    },
    {
      title: getText("chats", 4),
      label: "",
      href: "/chats",
      icon: <IconMessages size={18} />,
    },
    {
      title: getText("order", 5),
      label: "",
      href: "/order",
      icon: <IconShoppingCart size={18} />,
    },
    {
      title: getText("calendar", 6),
      label: "",
      href: "/calendar",
      icon: <IconCalendarWeek size={18} />,
    },
    {
      title: getText("tasks", 7),
      label: "",
      href: "/tasks",
      icon: <IconChecklist size={18} />,
    },
    {
      title: getText("supports", 8),
      label: "",
      href: "/supports",
      icon: <IconHelpHexagon size={18} />,
    },
    {
      title: getText("authentication", 9),
      label: "",
      href: "",
      icon: <IconUserShield size={18} />,
      sub: [
        {
          title: getText("signInEmailPassword", 10),
          label: "",
          href: "/sign-in",
          icon: <IconHexagonNumber1 size={18} />,
        },
        {
          title: getText("signUp", 11),
          label: "",
          href: "/sign-up",
          icon: <IconHexagonNumber3 size={18} />,
        },
      ],
    },
    {
      title: getText("users", 12),
      label: "",
      href: "/users",
      icon: <User2Icon size={18} />,
    },
    {
      title: getText("settings", 13),
      label: "",
      href: "/settings",
      icon: <IconSettings size={18} />,
    },
  ];
};
