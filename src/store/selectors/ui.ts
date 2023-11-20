import { RootState } from "..";

export const uiLoadigSelector = (state: RootState) => state.ui.loading;
export const uiAvatarSelector = (state: RootState) => state.ui.avatar;
export const uiNavigatorSelector = (state: RootState) => state.ui.navigator;
