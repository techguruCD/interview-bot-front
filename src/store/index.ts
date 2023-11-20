import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import uiReducer from "./reducers/ui";
import profileReducer from "./reducers/profile";
import chatReducer from "./reducers/chat";

const combinedReducers = combineReducers({
  ui: uiReducer,
  profile: profileReducer,
  chat: chatReducer,
});
const store = configureStore({
  reducer: (state, action) => {
    if (action.type === "reset") {
      state = undefined;
    }
    return combinedReducers(state, action);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
