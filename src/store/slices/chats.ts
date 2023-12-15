import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ChatsState {
  activeId: string | null;
}

const initialState: ChatsState = {
  activeId: "0",
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setActiveChatId: (state, action: PayloadAction<string>) => {
      state.activeId = action.payload;
    },
  },
});

export const { setActiveChatId } = chatsSlice.actions;

export default chatsSlice.reducer;
