/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 *  NAME    : Sidebar.tsx
 *  DATE      : 14/10/2025
 *  DATE_MODIFY       : 14/10/2025
 *  DESCRIPTION: SIDEBAR COMPONENT
 * =====================================================
 */

// DEPENDENCIES
import type { JSX } from "react";
import { useEffect, useState } from "react";
import { IconChevronsLeft, IconMenu2, IconX } from "@tabler/icons-react";
import { Layout } from "./code/layout";
import { Button } from "./code/button";
import Nav from "./code/nav";
import { cn } from "@/lib/utils";
import { getSidelinks } from "./data/sidelinks";
import { useGetInfoUserQuery } from "@/services/userApi";

// LOGIC
interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  linksData: ((key: string) => string) | string | Array<string>;
}

// SIDEBAR
export default function Sidebar({
  className,
  isCollapsed,
  setIsCollapsed,
  linksData,
}: SidebarProps): JSX.Element {
  const [navOpened, setNavOpened] = useState(false);
  const { data: userData, isLoading } = useGetInfoUserQuery();
  const displayName = isLoading
    ? "Cargando..."
    : userData?.first_name ?? "My Enterpise";
  const displayEmail = isLoading ? "" : userData?.email ?? "Error";
  useEffect(() => {
    if (navOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navOpened]);
  return (
    <aside
      className={cn(
        `fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${
          isCollapsed ? "md:w-14" : "md:w-64"
        }`,
        className
      )}
    >
      <div
        className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${
          navOpened ? "h-svh opacity-50" : "h-0 opacity-0"
        } w-full bg-black md:hidden`}
        onClick={() => {
          setNavOpened(false);
        }}
      />
      <Layout fixed className={navOpened ? "h-svh" : ""}>
        <Layout.Header
          sticky
          className="z-50 flex justify-between px-4 py-3 shadow-sm md:px-4"
        >
          <div className={`flex items-center ${!isCollapsed ? "gap-2" : ""}`}>
            <img alt="" className="max-h-[60px] hidden dark:block" src="/img/logo-w-nobg.png" />
            <img alt="" className="max-h-[60px] block dark:hidden" src="/img/logo-d-nobg.png" />
            <div
              className={`flex flex-col justify-end truncate ${
                isCollapsed ? "invisible w-0" : "visible w-auto"
              }`}
            >
              <span className="font-medium">{displayName}</span>
              <span className="text-xs">{displayEmail}</span>
            </div>
          </div>
          <Button
            aria-controls="sidebar-menu"
            aria-expanded={navOpened}
            aria-label="Toggle Navigation"
            className="md:hidden"
            size="icon"
            variant="ghost"
            onClick={() => {
              setNavOpened((previous) => !previous);
            }}
          >
            {navOpened ? <IconX /> : <IconMenu2 />}
          </Button>
        </Layout.Header>
        <Nav
          id="sidebar-menu"
          isCollapsed={isCollapsed}
          links={getSidelinks(linksData)}
          className={`z-40 h-full flex-1 overflow-auto ${
            navOpened ? "max-h-screen" : "max-h-0 py-0 md:max-h-screen md:py-2"
          }`}
          closeNav={() => {
            setNavOpened(false);
          }}
        />
        <Button
          aria-label="Toggle Button"
          className="absolute -right-5 top-1/2 z-50 hidden rounded-full md:inline-flex"
          size="icon"
          variant="outline"
          onClick={() => {
            setIsCollapsed((previous) => !previous);
          }}
        >
          <IconChevronsLeft
            className={`h-5 w-5 ${isCollapsed ? "rotate-180" : ""}`}
            stroke={1.5}
          />
        </Button>
      </Layout>
    </aside>
  );
}
