/* eslint-disable unicorn/prevent-abbreviations */
/**
 * =====================================================
 *  NAME    : utils.ts
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: UTILS FUNCTIONS
 * =====================================================
 */

// DEPENDENCIES
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// FUNCTIONS
export function cn(...inputs: Array<ClassValue>): string {
  return twMerge(clsx(inputs));
}

// ENVIRONMENT
export const isProduction = import.meta.env.MODE === "production";
