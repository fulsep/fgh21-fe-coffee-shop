import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testimonials = createApi({
  reducerPath: "query/testimonials",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    listTestimonials: builder.query({
      query: (page) => `/testimonials?page=${page}`,
    }),
  }),
});

export const { useListTestimonialsQuery } = testimonials;
