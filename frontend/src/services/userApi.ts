/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * =====================================================
 * NAME    : userApi.ts
 * DATE      : 21/10/2025
 * DATE_MODIFY       : 21/10/2025
 * DESCRIPTION: SERVICE STATE BACKEND
 * =====================================================
 */

// DEPENDENCIES
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// LOGIC
interface UserData {
  role_id: number;
  entity_id: number;
  spot_id: number;
  profile_id: number;
  email: string;
  id_profile: number;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  bio: string | null;
}
interface InfoUserResponse {
  userData: UserData;
}

// API
const baseUrl = import.meta.env.VITE_BACKEND || "http://localhost:3001/";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getInfoUser: builder.query<UserData, void>({
      query: () => {
        const token = localStorage.getItem("access_token");
        if (!token) {
          console.error("No access token found");
        }
        return {
          url: "directives/getInfoUser",
          method: "POST",
          body: {
            token: token,
          },
        };
      },
      transformResponse: (response: InfoUserResponse) => response.userData,
      providesTags: ["User"],
    }),
  }),
});
export const { useGetInfoUserQuery } = userApi;
