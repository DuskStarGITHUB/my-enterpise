/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 *  NAME    : themeState.tsx
 *  DATE      : 22/09/2025
 *  DESCRIPTION: THEME SLICE MANAGEMENT USING REDUX TOOLKIT
 * =====================================================
 */

// DEPENDENCIES
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// THEME VARIANTS
export type Theme = "light" | "dark";
export interface ThemeState {
  current: Theme;
}
const initialState: ThemeState = { current: "light" };

// SLICE
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.current = state.current === "light" ? "dark" : "light";
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.current = action.payload;
    },
  },
});
export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
