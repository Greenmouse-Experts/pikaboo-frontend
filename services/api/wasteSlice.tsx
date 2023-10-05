"use client";

import { BaseResult, ErrorResult, UsersResult } from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";
import {
  CreateTructInput,
  DeleteTruckInput,
  TruckResult,
} from "@/shared/utils/types/routine";

export const wasteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTruck: builder.query<BaseResult | ErrorResult, CreateTructInput>({
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

    editTruck: builder.query<BaseResult | ErrorResult, CreateTructInput>({
      query: (payload) => ({
        url: `${ENDPOINT.UPDATE_TRUCKS}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getTrucks: builder.query<TruckResult, string | void>({
      query: (payload) => ({
        url: `${ENDPOINT.GET_TRUCKS}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    deleteTrucks: builder.query<BaseResult, string | DeleteTruckInput>({
      query: (payload) => ({
        url: `${ENDPOINT.DELETE_TRUCKS}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getSpecial: builder.query<any, string | void>({
      query: (payload) => ({
        url: `${ENDPOINT.GET_SPECIALS}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    assignSpecial: builder.query<BaseResult, string | any>({
      query: (payload) => ({
        url: `${ENDPOINT.ASSIGN_SPECIAL}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getWasteResidence: builder.query<UsersResult | ErrorResult , string | void>({
      query: () => ({
        url: `${ENDPOINT.GET_WASTE_REESIDENCE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    suspendPersonnel: builder.query<BaseResult, string | FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.SUSPEND_PERSONNEL}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyCreateTruckQuery,
  useLazyEditTruckQuery,
  useGetTrucksQuery,
  useLazyDeleteTrucksQuery,
  useGetSpecialQuery,
  useLazyAssignSpecialQuery,
  useGetWasteResidenceQuery,
  useLazySuspendPersonnelQuery
} = wasteApiSlice;
