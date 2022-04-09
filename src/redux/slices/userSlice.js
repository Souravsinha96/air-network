import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: false,

  reducers: {
    login: (state, { payload }) => (state = payload),
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
