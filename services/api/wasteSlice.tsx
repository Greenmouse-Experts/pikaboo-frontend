"use client";

import {
  ErrorResult,
  UpdateBillInput,
  UpdateBillResult,
} from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";

export const wasteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTruck: builder.query<any | ErrorResult, any>({
      query: (payload) => ({
        url: `${ENDPOINT.ADD_TRUCKS}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    editTruck: builder.query<UpdateBillResult | ErrorResult, UpdateBillInput>({
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

    getTrucks: builder.query<any  , string | void>({
        query: () => ({
          url: `${ENDPOINT.GET_TRUCKS}`,
          method: ENDPOINT.HTTP_METHODS.GET,
          headers: {
            Authorization: requestAuthorization(),
          },
        }),
        keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
      }),
  }),
  overrideExisting: true,
});

export const { useLazyCreateTruckQuery, useLazyEditTruckQuery, useGetTrucksQuery } =
  wasteApiSlice;