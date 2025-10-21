/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 * NAME    : index.tsx
 * DATE      : 20/09/2025
 * DATE_MODIFY       : 21/10/2025
 * DESCRIPTION: STORE FOR REDUX TOOLKIT
 * =====================================================
 */

// DEPENDENCIES
import type { Middleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
// SLICES
import themeReducer from "./tasks/themeState";
import langReducer from "./tasks/langState";
// SERVICES
import { userApi } from "@/services/userApi";

// LOGIC
const reducers: { [KEY: string]: unknown } = {};
const middleware: Array<Middleware> = [];

// STORE
const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    ...reducers,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware).concat(userApi.middleware),
});

// DISPATCH & STATE TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
