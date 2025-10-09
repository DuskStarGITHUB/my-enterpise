/**
 * =====================================================
 *  NAME    : retype.ts
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 09/10/2025
 *  DESCRIPTION: TYPESCRIPT TYPES FOR RESPONSE DATA
 * =====================================================
 */

// TYPES
export type Response = {
  res: [];
};

export type User = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
};
