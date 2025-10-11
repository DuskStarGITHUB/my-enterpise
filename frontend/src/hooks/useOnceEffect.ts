/**
 * =====================================================
 *  NAME    : useOnceEffect.tsx
 *  DATE    : 11/10/2025
 *  DESCRIPTION: CUSTOM HOOK TO PREVENT RENDER 2 TIMES
 * =====================================================
 */

// DEPENDENCIES
import { useEffect, useRef } from "react";

// USE
export function useOnceEffect(
  callback: () => void | (() => void),
  deps: any[] = []
) {
  const calledRef = useRef(false);
  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;
    return callback();
  }, deps);
}
