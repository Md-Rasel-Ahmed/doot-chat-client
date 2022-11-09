import { apiSlice } from "../api/apiSlice";
import { messagesApi } from "../messages/messagesApi";
import io from "socket.io-client";
export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: () => `/conversations`,
    }),
    getUserConversationsList: builder.query({
      query: (email) => `/conversations/${email}`,
      async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved }) {
        // create
        const socket = io("http://localhost:5000", {
          agent: false,
          reconnectionDelay: 10000,
          reconnectionAttempts: 10,
          transports: ["websocket"],
          reconnection: true,
        });
        try {
          await cacheDataLoaded;
          socket.on("loadData", (data) => {
            console.log("ache");
          });
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
    addConversations: builder.mutation({
      query: (data) => ({
        url: `/conversations`,
        method: "POST",
        body: data,
      }),
      async onQueryStaterd(arg, { queryFulfilled, dispatch }) {
        const conversations = await queryFulfilled;
        if (conversations) {
          dispatch(
            messagesApi.endpoints.addMessages.initiate({
              // id: findUser._id,
              conversationsId: arg.data.id,
              sender: {
                email: arg?.data?.email,
              },
              receiver: {
                email: arg?.participants.split("-")[1],
              },
              message: arg.data.message,
              timestamp: arg.data.timestamp,
            })
          );
        }
      },
    }),
    updateConversations: builder.mutation({
      query: ({ id, data }) => ({
        url: `/conversations/${id}`,
        method: "PUT",
        body: data,
      }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // create socket
        const socket = io("http://localhost:5000", {
          reconnectionDelay: 1000,
          reconnection: true,
          reconnectionAttemps: 10,
          transports: ["websocket"],
          agent: false,
          upgrade: false,
          rejectUnauthorized: false,
        });
        try {
          await cacheDataLoaded;
          socket.on("conversation", (data) => {
            console.log("data");
            console.log(data);
          });
        } catch (error) {
          console.log("errormessage");
        }
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        dispatch(
          apiSlice.util.updateQueryData(
            "getConversations",
            arg.data.id,
            (draft) => {
              const conversation = draft.find((c) => c.id == arg.id);
              conversation.message = arg.data.message;
              conversation.timestamp = arg.data.timestamp;
            }
          )
        );
        try {
          const conversations = await queryFulfilled;
          if (conversations) {
            await dispatch(
              messagesApi.endpoints.addMessages.initiate({
                // id: findUser._id,
                id: arg.id,
                sender: {
                  email: arg.data?.email,
                },
                receiver: {
                  email: arg?.participants.split("-")[1],
                },
                message: arg.data.message,
                timestamp: arg.data.timestamp,
              })
            );
          }
        } catch (error) {
          // resultPath.undo();
        }
      },
    }),
  }),
});

export const {
  useAddConversationsMutation,
  useUpdateConversationsMutation,
  useGetConversationsQuery,
  useGetUserConversationsListQuery,
} = conversationsApi;
