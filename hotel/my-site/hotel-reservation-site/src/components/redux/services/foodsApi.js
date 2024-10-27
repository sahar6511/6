import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const foodsApi = createApi({
  reducerPath: "foodsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  endpoints: (builder) => ({
    getFoods: builder.query({
      query: () => "foods",
      providesTags: ["foods"],
    }),

  }),
});

export const { useGetFoodsQuery } = foodsApi;
