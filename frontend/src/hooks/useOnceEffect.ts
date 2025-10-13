/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
  _deps: Array<unknown> = []
) {
  const calledRef = useRef(false);
  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;
    return callback();
  }, [callback]);
}
