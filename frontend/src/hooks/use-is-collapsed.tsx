/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * =====================================================
 *  NAME    : use-is-collapsed.tsx
 *  DATE      : 14/10/2025
 *  DATE_MODIFY       : 14/10/2025
 *  DESCRIPTION: HOOK TO MANAGE STATE UI DESING
 * =====================================================
 */

// DEPENDENCIES
import { useEffect } from "react";
import useLocalStorage from "./use-local-storage";

// HOOK
export default function useIsCollapsed() {
  const [isCollapsed, setIsCollapsed] = useLocalStorage({
    key: "collapsed-sidebar",
    defaultValue: false,
  });
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768 ? false : isCollapsed);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isCollapsed, setIsCollapsed]);
  return [isCollapsed, setIsCollapsed] as const;
}
