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

    updateResisdenceInfo: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.UPDATE_ACCOUNT}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    sendLogin: builder.query<BaseResult | ErrorResult, number>({
      query: (param) => ({
        url: `${ENDPOINT.SEND_LOGIN_DETAILS}?id=${param}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    updatePersonalProfile: builder.query<BaseResult | ErrorResult, any>({
      query: (payload) => ({
        url: `${ENDPOINT.UPDATE_PERSONAL}?user_id=${payload.id}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload.data,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    updateWallet: builder.query<BaseResult | ErrorResult, any>({
      query: (payload) => ({
        url: `${ENDPOINT.FUND_RESIDENCE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    wasteUpdateWallet: builder.query<BaseResult | ErrorResult, any>({
      query: (payload) => ({
        url: `${ENDPOINT.WASTE_FUND_RESIDENCE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
    }),

    wasteUpdateBill: builder.query<BaseResult | ErrorResult, any>({
      query: (payload) => ({
        url: `${ENDPOINT.WASTE_UPDATE_BILL}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyFlagResidenceQuery,
  useLazyUpdateBillQuery,
  useLazyUpdateResisdenceInfoQuery,
  useLazySendLoginQuery,
  useLazyUpdatePersonalProfileQuery,
  useLazyUpdateWalletQuery,
  useLazyWasteUpdateWalletQuery,
  useLazyWasteUpdateBillQuery,
} = residenceApiSlice;
