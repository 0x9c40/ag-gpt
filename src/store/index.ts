import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./slices/layout.ts";
import chatsReducer from "./slices/chats.ts";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    chats: chatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
