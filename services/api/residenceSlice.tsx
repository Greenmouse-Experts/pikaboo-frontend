"use client";

import {
  BaseResult,
  CreateFleetInput,
  CreateResidenceInput,
  ErrorResult,
  UpdateBillInput,
  UpdateBillResult,
} from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { AdminLoginResult } from "@/shared/utils/types/auth";
import { requestAuthorization } from "../helpers";

export const residenceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    flagResidence: builder.query<any | ErrorResult, string>({
      query: (query) => ({
        url: `${ENDPOINT.FLAG_RESIDENCE}?user_id=${query}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    updateBill: builder.query<UpdateBillResult | ErrorResult, UpdateBillInput>({
      query: (payload) => ({
        url: `${ENDPOINT.UPDATE_BILL}`,
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

export const { useLazyFlagResidenceQuery, useLazyUpdateBillQuery } =
  residenceApiSlice;
