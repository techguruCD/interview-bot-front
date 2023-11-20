import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

export type ProfileState = {
  username: string;
  title: string;
  description: string;
  website: string;
  linkedin: string;
};

const initState: ProfileState = {
  username: "Neil Aitken",
  title: "Senior Product Manager",
  description:
    "I Help Companies Deliver Innovative SaaS Products that Delight Customers and Drive Business Growth",
  website: "https://neil-aitken.io",
  linkedin: "https://www.linkedin.com/in/neiljaitken/",
};

export const profileSlice = createSlice<
  ProfileState,
  SliceCaseReducers<ProfileState>
>({
  name: "profile",
  initialState: initState,
  reducers: {
    setUsername(state: ProfileState, action: PayloadAction<string>) {
      return { ...state, username: action.payload };
    },
    setTitle(state: ProfileState, action: PayloadAction<string>) {
      return { ...state, title: action.payload };
    },
    setDescription(state: ProfileState, action: PayloadAction<string>) {
      return { ...state, description: action.payload };
    },
    setWebsite(state: ProfileState, action: PayloadAction<string>) {
      return { ...state, website: action.payload };
    },
    setLinkedin(state: ProfileState, action: PayloadAction<string>) {
      return { ...state, linkedin: action.payload };
    },
  },
});
const profileReducer = profileSlice.reducer;
export default profileReducer;
export const {
  setUsername,
  setTitle,
  setDescription,
  setWebsite,
  setLinkedin,
} = profileSlice.actions;
