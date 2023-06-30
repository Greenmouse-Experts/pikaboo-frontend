"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormInput1 } from "@/shared/utils/types";

const initialState = {
  form: {
    title: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    phone2: "",
    address: "",
  } as FormInput1,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveForm: (state, action: PayloadAction<FormInput1>) => {
      state.form = action.payload;
    },
    resetForm: (state) => {
      state = initialState;
    },
  },
});

export const { saveForm, resetForm } = formSlice.actions;

export default formSlice.reducer;
