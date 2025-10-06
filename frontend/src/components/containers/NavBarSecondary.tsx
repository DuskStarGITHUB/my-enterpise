/**
 * =====================================================
 *  NAME    : NavBarSecondary.tsx
 *  DATE      : 06/10/2025
 *  DATE_MODIFY       : 06/10/2025
 *  DESCRIPTION: NAVBAR INVISIBLE TO VISIBLE SCROLL
 * =====================================================
 */

// DEPENDENCIES
import React, { useState, useEffect } from "react";
import logoLight from "/img/logo-w-nobg.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Github, Twitter, CircleCheckBig, Menu, X } from "lucide-react";

// LOGIC
type NavBarSecondaryProps = {
  t: (key: string) => string;
};

// ITEMS
// ITEMS
const documentationItems = [
  {
    title: "Alert Dialog",
    href: "/docs/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content.",
  },
  {
    title: "Hover Card",
    href: "/docs/hover-card",
    description: "Preview content available behind a link for sighted users.",
  },
  {
    title: "Progress",
    href: "/docs/progress",
    description:
      "Shows completion progress of a task, typically a progress bar.",
  },
];
const resourcesItems = [
  {
    title: "Tutorials",
    href: "/resources/tutorials",
    description: "Step-by-step guides to help you build with our library.",
  },
  {
    title: "Templates",
    href: "/resources/templates",
    description: "Ready-to-use templates to speed up your projects.",
  },
  {
    title: "Community",
    href: "/resources/community",
    description: "Connect with other developers and share ideas.",
  },
];
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          className="block select-none no-underline outline-none focus:shadow-md rounded-md p-2 hover:bg-muted"
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

const NavBarSecondary: React.FC<NavBarSecondaryProps> = ({ t }) => {
  const [sticky, setStiky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      if (window.scrollY > vh * 1.01) {
        setStiky(true);
      } else {
        setStiky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 w-full backdrop-blur-md backdrop-brightness-80 px-2 z-50 transition-all duration-200 ease-in shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] ${
        sticky
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-center w-full">
        <div className="flex w-full max-w-6xl justify-between items-center py-2">
          <div className="flex-shrink-0">
            <img
              src={logoLight}
              alt="Logo"
              className="max-w-10 object-contain md:max-w-30"
            />
          </div>
          <button
            className="sm:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
          <div className="hidden sm:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-2 items-end">
                {/* HOME */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} !bg-transparent !text-white font-[Montserrat] text-[10px] !font-bold uppercase !hover:bg-transparent !focus:bg-transparent !h-0 !p-0 sm:text-[17px]`}
                  >
                    <a href="/">{t("navbar.home")}</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* DOCUMENTATION */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="!bg-transparent !text-white font-[Montserrat] text-[10px] font-bold uppercase !hover:bg-transparent !focus:bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!hover:bg-transparent !h-0 !p-0 sm:text-[17px]">
                    {t("navbar.dom")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href="/docs"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium">
                              shadcn/ui Docs
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              Learn about components and best practices.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {documentationItems.map((item) => (
                        <ListItem key={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* RESOURCES */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="!bg-transparent !text-white font-[Montserrat] text-[10px] font-bold uppercase !hover:bg-transparent !focus:bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!hover:bg-transparent !h-0 !p-0 sm:text-[17px]">
                    {t("navbar.src")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-4 p-2">
                      {resourcesItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block p-2 rounded-md hover:bg-muted/10 focus:bg-muted/20 no-underline outline-none"
                            >
                              <div className="font-medium">{item.title}</div>
                              <div className="text-muted-foreground text-sm">
                                {item.description}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* ICON LINKS */}
                <NavigationMenuItem>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="items-center text-white hidden sm:flex"
                  >
                    <Github size={30} />
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="items-center text-white hidden sm:flex"
                  >
                    <Twitter size={30} />
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="#"
                    className="items-center text-white hidden sm:flex"
                  >
                    <CircleCheckBig size={30} />
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="sm:hidden bg-black/80 w-full p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/" className="text-white text-lg font-bold">
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <span className="text-white text-lg font-bold">
                {t("navbar.dom")}
              </span>
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                {documentationItems.map((item) => (
                  <li key={item.title}>
                    <a href={item.href} className="text-white text-sm">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <span className="text-white text-lg font-bold">
                {t("navbar.src")}
              </span>
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                {resourcesItems.map((item) => (
                  <li key={item.title}>
                    <a href={item.href} className="text-white text-sm">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBarSecondary;
