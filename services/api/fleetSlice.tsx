"use client";

import { BaseResult, ErrorResult } from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";
import {
  GetFleetDashboardInput,
} from "@/shared/utils/types/routine";

export const wasteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query<any | ErrorResult, GetFleetDashboardInput>({
      query: (payload) => ({
        url: `${ENDPOINT.GET_FLEET_DASHBOARD}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetDashboardQuery,
} = wasteApiSlice;
