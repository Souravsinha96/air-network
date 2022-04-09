import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: false,

  reducers: {
    loading: (state, { payload }) => (state = payload),
  },
});

export const { loading } = loaderSlice.actions;
export default loaderSlice.reducer;
