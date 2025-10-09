/**
 * =====================================================
 *  NAME    : jsonService.ts
 *  DATE      : 09/10/2025
 *  DATE_MODIFY       : 09/10/25
 *  DESCRIPTION: SERVICES FOR API WITH REDUX TOOLKIT QUERY
 * =====================================================
 */

// DEPENDENCIES
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "./types/restype";

// API SERVICE
const BASE_URL = "https://jsonplaceholder.typicode.com";

// API
export const jsonService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
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
