/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * =====================================================
 *  NAME    : use-local-storage.tsx
 *  DATE      : 14/10/2025
 *  DATE_MODIFY       : 14/10/2025
 *  DESCRIPTION: HOOK TO MANAGE LOCALSTORAGE ITEM
 * =====================================================
 */

// DEPENDENCIES
import { useEffect, useState } from "react";

// LOGIC
interface LocalStorageProps<T> {
  key: string;
  defaultValue: T;
}

// HOOK
export default function useLocalStorage<T>({
  key,
  defaultValue,
}: LocalStorageProps<T>) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue] as const;
}
