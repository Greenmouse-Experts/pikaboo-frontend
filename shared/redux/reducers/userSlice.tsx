"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authUser } from "@/shared/utils/types/auth";

const initialState = {
  user: {
    token: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    id: "",
    user_type: "",
    admin_type: "",
    avatar: ""
  } as authUser,
  fcm_token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<authUser>) => {
      state.user = action.payload;
    },
    saveToken: (state, action: PayloadAction<any>) => {
      state.fcm_token = action.payload;
    },
    resetUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { saveUser, resetUser, saveToken } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;