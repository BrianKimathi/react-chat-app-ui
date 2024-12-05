// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: { chatArea: false },
  reducers: {
    openChat: (state) => {
      state.chatArea = true;
    },
    closeChat: (state) => {
      state.chatArea = false;
    },
  },
});

const detailSlice = createSlice({
  name: "detail",
  initialState: { detailArea: false },
  reducers: {
    openDetail: (state) => {
      state.detailArea = true;
    },
    closeDetail: (state) => {
      state.detailArea = false;
    },
  },
});

export const { openChat, closeChat } = chatSlice.actions;

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

export default store;
