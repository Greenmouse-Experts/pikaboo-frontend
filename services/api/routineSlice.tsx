"use client";

import {  UsersResult, ErrorResult, BaseResult, CreateZoneInput, ZonesList, ZoneResult, ZoneResidenceResult, UserDetailsResult, SendToken } from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";
import { PaymentResult } from "@/shared/utils/types/routine";

export const routineApiSlice = apiSlice.injectEndpoints({
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

    getMyZoneUsers: builder.query<UsersResult , string | void>({
      query: (query) => ({
        url: `${ENDPOINT.GET_MY_ZONE_RESIDENCE}`,
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

    getZones: builder.query<ZoneResult  , string | void>({
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

    sendFcmToken: builder.query<BaseResult | ErrorResult , SendToken>({
      query: (payload) => ({
        url: `${ENDPOINT.SEND_TOKEN}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getNotify: builder.query<any | ErrorResult , void>({
      query: () => ({
        url: `${ENDPOINT.GET_NOTIFICATION}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getUnreadNotify: builder.query<any | ErrorResult , void>({
      query: () => ({
        url: `${ENDPOINT.GET_UNREAD_NOTIFICATION}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    readNotify: builder.query<any | ErrorResult , FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.READ_NOTIFICATION}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    deleteNotify: builder.query<any | ErrorResult , any>({
      query: (param) => ({
        url: `${ENDPOINT.DELETE_NOTIFICATION}?notification_id=${param}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    adminGetNotify: builder.query<any | ErrorResult , void>({
      query: () => ({
        url: `${ENDPOINT.GET_ADMIN_NOTIFICATION}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    adminGetUnreadNotify: builder.query<any | ErrorResult , void>({
      query: () => ({
        url: `${ENDPOINT.GET_ADMIN_UNREAD_NOTIFICATION}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    adminReadNotify: builder.query<any | ErrorResult , FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.READ_ADMIN_NOTIFICATION}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    adminDeleteNotify: builder.query<any | ErrorResult , any>({
      query: (param) => ({
        url: `${ENDPOINT.DELETE_ADMIN_NOTIFICATION}?notification_id=${param}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getTransaction: builder.query<PaymentResult | ErrorResult , void>({
      query: (param) => ({
        url: `${ENDPOINT.GET_TRANSACTION}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getSpecial: builder.query<any | ErrorResult , void>({
      query: () => ({
        url: `${ENDPOINT.GET_SPECIAL_REQUEST}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getFlat: builder.query<any | ErrorResult , void>({
      query: () => ({
        url: `${ENDPOINT.GET_FLAT_RATE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getLga: builder.query<any | ErrorResult , void>({
      query: () => ({
        url: `${ENDPOINT.GET_LGA}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    updateFlat: builder.query<BaseResult | ErrorResult , FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.GET_FLAT_RATE}`,
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
    useLazySendFcmTokenQuery,
    useGetNotifyQuery,
    useGetUnreadNotifyQuery,
    useLazyReadNotifyQuery,
    useLazyDeleteNotifyQuery,
    useAdminGetNotifyQuery,
    useAdminGetUnreadNotifyQuery,
    useLazyAdminReadNotifyQuery,
    useLazyAdminDeleteNotifyQuery,
    useGetTransactionQuery,
    useGetFlatQuery,
    useGetSpecialQuery,
    useLazyUpdateFlatQuery,
    useGetLgaQuery,
    useGetMyZoneUsersQuery
} = routineApiSlice;