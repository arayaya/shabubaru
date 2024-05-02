import { createSlice } from "@reduxjs/toolkit";

export const queueSlice = createSlice({
  name: "queue",
  initialState: {
    cusType: "",
    queueLeft: "",
    currentQueue: "",
  },
  reducers: {
    setcusType: (state, action) => {
      state.cusType = action.payload;
    },
    setqueueLeft: (state, action) => {
      state.queueLeft = action.payload;
    },
    setcurrentQueue: (state, action) => {
      state.currentQueue = action.payload;
    },
  },
});

export const { setcusType, setqueueLeft, setcurrentQueue } =
  queueSlice.actions;

export default queueSlice.reducer;