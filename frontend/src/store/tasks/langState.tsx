/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 *  NAME    : langState.tsx
 *  DATE    : 23/09/2025
 *  DESCRIPTION: LANGUAGE SLICE
 * =====================================================
 */

// DEPENDENCIES
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// TYPES
export type Lang = "es" | "en";
export interface LangState {
  current: Lang;
}
const initialState: LangState = { current: "es" };

// SLICE
const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<Lang>) {
      state.current = action.payload;
    },
  },
});
export const { setLang } = langSlice.actions;
export default langSlice.reducer;