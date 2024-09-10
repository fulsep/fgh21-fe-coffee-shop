import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transaction = createApi({
  reducerPath: "query/transaction",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getTransaction: builder.query({
      query: (token) => ({
        url: `/transaction`,
        headers:{
          Authorization: "Bearer " + token,
        },
    }),
    }),
  }),
});

export const { useGetTransactionQuery } = transaction;
