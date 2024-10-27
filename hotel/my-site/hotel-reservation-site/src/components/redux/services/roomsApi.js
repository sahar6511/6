import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  endpoints: (builder) => ({

    getRoomById: builder.query({
      query: (id) => `rooms/${id}`,
    }),

    getRooms: builder.query({
      query: () => "rooms",
      providesTags: ["rooms"],
    }),

    getLimitRooms:builder.query({
      query:(page)=>`rooms?_page=${page}&_limit=3`,
       providesTags: ["rooms"],

    }),

    getSpecialRooms: builder.query({
      query: () => "specialRooms",
      providesTags: ["rooms"],
    }),

    deleteRoom:builder.mutation({
      query:(id)=>({
        url:`rooms/${id}`,
        method:"DELETE"
      }),
      invalidatesTags: ["rooms"],
    }),

    updateRoom:builder.mutation({
      query:({id,title,price,capacity,bed,bath,wifi,img,facilities,info})=>({
        url:`rooms/${id}`,
        method:"PATCH",
        body:{title,price,capacity,bed,bath,wifi,img,facilities,info}
      }),
      invalidatesTags: ["rooms"],
    })
  }),
});

export const { useGetRoomByIdQuery,useGetRoomsQuery,useGetSpecialRoomsQuery,useGetLimitRoomsQuery,useDeleteRoomMutation,useUpdateRoomMutation } = roomsApi;
