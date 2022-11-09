import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/users",
    }),
    // addConversations: builder.mutation({
    //   query: (email) => ({
    //     url: "/conversations",
    //     body:email
    //   }),
    // }),
  }),
});

export const { useGetUserQuery } = usersApi;
