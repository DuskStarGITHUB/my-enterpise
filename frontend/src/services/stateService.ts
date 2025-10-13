/**
 * =====================================================
 *  NAME    : stateService.ts
 *  DATE      : 09/10/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: SERVICE STATE BACKEND
 * =====================================================
 */

// DEPENDENCIES
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Response } from "./types/restype";

// SERVICE
const BASE_URL = "http://localhost:3001/";

// API
const stateApi = createApi({
  reducerPath: "stateApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getState: builder.query<Response, void>({
      query: () => "/",
    }),
  }),
});
export const { useGetStateQuery } = stateApi;
const service = {
  ...stateApi,
  hooks: {
    useGetStateQuery,
  },
};
export default service;
