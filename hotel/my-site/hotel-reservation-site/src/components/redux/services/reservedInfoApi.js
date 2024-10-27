import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const reservedInfoApi = createApi({
  reducerPath: "reservedInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  endpoints: (builder) => ({
    getReservedInfo: builder.query({
      query: () => "reservedInfo",
      providesTags: ["reservedInfo"],
    }),

    getReservedInfoById: builder.query({
      query: (id) => `reservedInfo/${id}`,
    }),

    addNewReserve:builder.mutation({
        query:(newReserve) => ({
            url:'reservedInfo',
            method:'POST',
            body:newReserve,
        }),
        invalidatesTags:['reservedInfo']
    }),

    deleteReservedRoom:builder.mutation({
      query:(id)=>({
        url:`reservedInfo/${id}`,
        method:"DELETE"
      }),
      invalidatesTags: ["reservedInfo"],
    })



  }),
});

export const {useGetReservedInfoQuery,useGetReservedInfoByIdQuery,useAddNewReserveMutation,useDeleteReservedRoomMutation} = reservedInfoApi;