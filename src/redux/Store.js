import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import loaderReducer from "./slices/loaderSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
  },
});
