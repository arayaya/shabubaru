import { configureStore } from "@reduxjs/toolkit";
import { queueSlice } from "./QueueSlice";

export const store = configureStore({
  reducer: {
    queue: queueSlice.reducer,
  },
});