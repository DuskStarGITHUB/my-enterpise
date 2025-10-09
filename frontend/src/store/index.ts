/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 09/10/2025
 *  DESCRIPTION: STORE FOR REDUX TOOLKIT
 * =====================================================
 */

// DEPENDENCIES
import { configureStore, Middleware } from "@reduxjs/toolkit";
// SLICES
import themeReducer from "./tasks/themeState";
import langReducer from "./tasks/langState";
// SERVICES
import services from "@/services";

// LOGIC
const reducers: { [KEY: string]: any } = {};
const middleware: Middleware[] = [];
Object.keys(services).forEach((key) => {
  const service = services[key];
  reducers[service.reducerPath] = service.reducer;
  middleware.push(service.middleware);
});

// STORE
const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

// DISPATCH & STATE TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
