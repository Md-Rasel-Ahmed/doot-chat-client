import { apiSlice } from "./../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
  tagsTypes: ["loadMessages"],

  endpoints: (builder) => ({
    getAllMessages: builder.query({
      query: (id) => `/messages/${id}`,
      providesTags: ["loadMessages"],
    }),
    getSingleMessage: builder.query({
      query: (id) => `/conversations/${id}`,
      providesTags: ["loadMessages"],
    }),

    addMessages: builder.mutation({
      query: (data) => ({
        url: "/messages",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["loadMessages"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/messages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["loadMessages"],
    }),
  }),
});

export const {
  useGetSingleMessageQuery,
  useAddMessagesMutation,
  useGetAllMessagesQuery,
  useDeleteMessageMutation,
} = messagesApi;
