"use client";

import {  UsersResult, ErrorResult, BaseResult, CreateZoneInput, ZonesList, ZoneResult, ZoneResidenceResult, UserDetailsResult } from "@/shared/utils/types";
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

    getMyUsers: builder.query<UsersResult , string | void>({
      query: (query) => ({
        url: `${ENDPOINT.GET_MY_USERS}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getUserDetail: builder.query<UserDetailsResult , string | string[]>({
      query: (query) => ({
        url: `${ENDPOINT.GET_USER_DETAIL}?user_id=${query}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getZones: builder.query< ZoneResult  , string | void>({
      query: (query) => ({
        url: `${ENDPOINT.GET_ZONE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getZoneResidence: builder.query<ZoneResidenceResult , string | string[] | undefined >({
      query: (query) => ({
        url: `${ENDPOINT.GET_ZONE_RESIDENCE}?zone_id=${query}`,
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
    useGetZonesQuery,
    useGetMyUsersQuery,
    useGetZoneResidenceQuery,
    useLazyGetZoneResidenceQuery,
    useLazyGetUserDetailQuery,
} = authApiSlice;