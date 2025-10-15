/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * =====================================================
 *  NAME    : useTheme.tsx
 *  DATE      : 14/10/2025
 *  DATE_MODIFY       : 14/10/2025
 *  DESCRIPTION: HOOK TO MANAGE NAV POSITION
 * =====================================================
 */

// DEPENDENCIES
import { useLocation } from "react-router-dom";

// HOOK
export default function useCheckActiveNav() {
  const { pathname } = useLocation();
  const checkActiveNav = (nav: string) => {
    return pathname === nav;
  };
  return { checkActiveNav };
}
