import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import loaderReducer from "./slices/loaderSlice";
import airlinesSlice from "./slices/airlinesInfoSlice";
const combinedReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  airlines: airlinesSlice,
});
const rootReducer = (state, action) => {
  if (action.type === "logout") {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
});
