"use client";

import {  UsersResult, ErrorResult } from "@/shared/utils/types";
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
  }),
  overrideExisting: true,
});

export const {
    useGetUsersQuery
} = authApiSlice;