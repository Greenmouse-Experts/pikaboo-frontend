"use client";

import { BaseResult, CreateFleetInput, ErrorResult } from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import {  AdminLoginResult } from "@/shared/utils/types/auth";
import { requestAuthorization } from "../helpers";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createField: builder.query<AdminLoginResult | ErrorResult, CreateFleetInput>({
      query: (payload) => ({
        url: `${ENDPOINT.CREATE_FIELD}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    createFleet: builder.query<AdminLoginResult | ErrorResult, CreateFleetInput>({
      query: (payload) => ({
        url: `${ENDPOINT.CREATE_FLEET}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    createWaste: builder.query<AdminLoginResult | ErrorResult, CreateFleetInput>({
      query: (payload) => ({
        url: `${ENDPOINT.CREATE_WASTE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    createResidence: builder.query<AdminLoginResult | ErrorResult, CreateFleetInput>({
      query: (payload) => ({
        url: `${ENDPOINT.CREATE_WASTE}`,
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
  useLazyCreateFleetQuery,
  useLazyCreateFieldQuery,
  useLazyCreateWasteQuery
} = authApiSlice;