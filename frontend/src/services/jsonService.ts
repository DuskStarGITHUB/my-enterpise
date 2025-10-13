/**
 * =====================================================
 *  NAME    : jsonService.ts
 *  DATE      : 09/10/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: SERVICES FOR API WITH REDUX TOOLKIT QUERY
 * =====================================================
 */

// DEPENDENCIES
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "./types/restype";

// API SERVICE
const BASE_URL = "https://jsonplaceholder.typicode.com";

// API
export const jsonService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<Array<User>, void>({
      query: () => "/users?_limit=5",
    }),
  }),
});
export const { useGetUsersQuery } = jsonService;
const service = {
  ...jsonService,
  hooks: {
    useGetUsersQuery,
  },
};
export default service;
