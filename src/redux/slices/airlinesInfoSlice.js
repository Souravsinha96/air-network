import { createSlice } from "@reduxjs/toolkit";

export const airlinesSlice = createSlice({
  name: "airlinesInfo",
  initialState: {},

  reducers: {
    setAirlinesInfo: (state, { payload }) => (state = payload),
  },
});

export const { setAirlinesInfo } = airlinesSlice.actions;
export default airlinesSlice.reducer;
