/**
 * =====================================================
 *  NAME    : Setting.tsx
 *  DATE      : 21/10/2025
 *  DATE_MODIFY       : 21/10/2025
 *  DESCRIPTION: PAGE SETTINGS
 * =====================================================
 */

// DEPENDENCIES
import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/layout/sidebar/sidebar";
import useIsCollapsed from "@/hooks/use-is-collapsed";
import Dashboard from "../dashboard/Dashboard";

// PAGE
const Client = (): JSX.Element => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useIsCollapsed();
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <Sidebar
        isCollapsed={isCollapsed}
        linksData={t}
        setIsCollapsed={setIsCollapsed}
      />
      <div
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${
          isCollapsed ? "md:ml-14" : "md:ml-64"
        } h-full`}
      >
        <Dashboard />
      </div>
    </div>
  );
};
export default Client;
