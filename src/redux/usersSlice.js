import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://645750891a4c152cf97f3302.mockapi.io",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ followers, id, following }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { followers, id, following },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = usersApi;
