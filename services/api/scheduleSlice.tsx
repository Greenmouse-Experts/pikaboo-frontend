"use client";

import { BaseResult, ErrorResult } from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";
import {
  CreateScheduleInput,
  PersonelRequestResult,
  ScheduleHomeResisdenceResult,
  ScheduleRequestResult,
} from "@/shared/utils/types/schedule";

export const scheduleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSchedule: builder.query<
      BaseResult | ErrorResult,
      CreateScheduleInput
    >({
      query: (payload) => ({
        url: `${ENDPOINT.CREATE_REQUEST}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    assignDriver: builder.query<
      BaseResult | ErrorResult,
      FormData
    >({
      query: (payload) => ({
        url: `${ENDPOINT.ASSIGN_DRIVER}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getPersonnel: builder.query<PersonelRequestResult | ErrorResult, number | void>({
      query: (param) => ({
        url: `${ENDPOINT.GET_PERSONNEL}?cleanup_request_id=${param}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getSchedule: builder.query<ScheduleRequestResult | ErrorResult, string | void>({
      query: () => ({
        url: `${ENDPOINT.GET_SCHEDULE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    wasteGetSchedule: builder.query<ScheduleRequestResult | ErrorResult, string | void>({
        query: () => ({
          url: `${ENDPOINT.WASTE_GET_REQUEST}`,
          method: ENDPOINT.HTTP_METHODS.GET,
          headers: {
            Authorization: requestAuthorization(),
          },
        }),
        keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
      }),

    getOneSchedule: builder.query<ScheduleHomeResisdenceResult, string |  string[] | undefined>({
      query: (param) => ({
        url: `${ENDPOINT.GET_ONE_SCHEDULE}?schedule_request_id=${param}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    getWasteSchedule: builder.query<ScheduleHomeResisdenceResult| ErrorResult, string | void>({
      query: () => ({
        url: `${ENDPOINT.GET_WASTE_SCHEDULE}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    submitPersonnel: builder.query<
      BaseResult | ErrorResult,
      FormData
    >({
      query: (payload) => ({
        url: `${ENDPOINT.SUBMIT_PERSONNEL}`,
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
  useLazyCreateScheduleQuery,
  useLazyAssignDriverQuery,
  useGetScheduleQuery,
  useGetOneScheduleQuery,
  useLazyGetOneScheduleQuery,
  useWasteGetScheduleQuery,
  useLazySubmitPersonnelQuery,
  useGetPersonnelQuery,
  useGetWasteScheduleQuery
} = scheduleApiSlice;
