"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ZonesList } from "@/shared/utils/types";

const initialState = {
  zone: [] as ZonesList[],
};

export const zoneSlice = createSlice({
  name: "zone",
  initialState,
  reducers: {
    saveZone: (state, action: PayloadAction<ZonesList[]>) => {
      state.zone = action.payload;
    },
  },
});

export const { saveZone } = zoneSlice.actions;

export default zoneSlice.reducer;