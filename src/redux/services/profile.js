import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profile = createApi({
  reducerPath: "query/profile",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    listProfile: builder.query({
      query: () => `/profile`,
    }),
    getProfile: builder.query({
      query: (id) => `/profile/${id}`,
    }),
  }),
});

export const { useListProfileQuery, useGetProfileQuery } = profile;
