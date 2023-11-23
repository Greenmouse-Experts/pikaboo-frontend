"use client";

import { BaseResult, CreateBoardInput, CreateFleetInput, ErrorResult } from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import {  AdminLoginResult, AssignZoneInput } from "@/shared/utils/types/auth";
import { requestAuthorization } from "../helpers";

export const onboardApiSlice = apiSlice.injectEndpoints({
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

    adminCreateWaste: builder.query<AdminLoginResult | ErrorResult, CreateFleetInput>({
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

    adminAssignZone: builder.query<AdminLoginResult | ErrorResult, AssignZoneInput>({
      query: (payload) => ({
        url: `${ENDPOINT.ASSIGN_ZONE}`,
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
        url: `${ENDPOINT.FLEET_CREATE_WASTE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    createBoard: builder.query<BaseResult | ErrorResult, CreateBoardInput>({
      query: (payload) => ({
        url: `${ENDPOINT.CREATE_BOARD}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    assignZone: builder.query<AdminLoginResult | ErrorResult, AssignZoneInput>({
      query: (payload) => ({
        url: `${ENDPOINT.FLEET_ASSIGN_ZONE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    createResidence: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.ONBOARD_RESISDENCE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    createDriver: builder.query<AdminLoginResult | ErrorResult, CreateFleetInput>({
      query: (payload) => ({
        url: `${ENDPOINT.CREATE_DRIVER}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    switchUserType: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.SWITCH_USER}`,
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
  useLazyCreateFleetQuery,
  useLazyCreateFieldQuery,
  useLazyCreateWasteQuery,
  useLazyAdminCreateWasteQuery,
  useLazyCreateResidenceQuery,
  useLazyAdminAssignZoneQuery,
  useLazyAssignZoneQuery,
  useLazyCreateDriverQuery,
  useLazySwitchUserTypeQuery,
  useLazyCreateBoardQuery
} = onboardApiSlice;