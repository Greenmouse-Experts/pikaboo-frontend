"use client";

import {  UsersResult, ErrorResult, BaseResult, CreateZoneInput } from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResult | any , string | void>({
      query: (query) => ({
        url: `${ENDPOINT.GET_USERS}${query}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getZones: builder.query< any , string | void>({
      query: (query) => ({
        url: `${ENDPOINT.GET_ZONE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    createZone: builder.query<BaseResult | ErrorResult , CreateZoneInput>({
      query: (payload) => ({
        url: `${ENDPOINT.ADD_ZONE}`,
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
    useGetUsersQuery,
    useLazyCreateZoneQuery,
    useGetZonesQuery
} = authApiSlice;