import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "query/product",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    listProducts: builder.query({
      query: ([page, limit]) =>
        `/products/our-product/?page=${page}&limit=${limit}`,
    }),
    getProducts: builder.query({
      query: (id) => `/products/our-product/${id}`,
    }),
  }),
});

export const { useListProductsQuery, useGetProductsQuery } = products;
