import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

export type UIState = {
  loading: boolean;
  avatar: string;
  navigator: boolean;
};

export const uiSlice = createSlice<UIState, SliceCaseReducers<UIState>>({
  name: "ui",
  initialState: { loading: false, avatar: "", navigator: false },
  reducers: {
    setLoading(state: UIState, action: PayloadAction<boolean>) {
      return { ...state, loading: action.payload };
    },
    setAvatar(state: UIState, action: PayloadAction<string>) {
      return { ...state, avatar: action.payload };
    },
    setNavigator(state: UIState, action: PayloadAction<string>) {
      return { ...state, avatar: action.payload };
    },
  },
});
const uiReducer = uiSlice.reducer;
export default uiReducer;
export const { setLoading, setAvatar, setNavigator } = uiSlice.actions;
