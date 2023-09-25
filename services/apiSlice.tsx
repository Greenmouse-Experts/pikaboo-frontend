"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, CACHE_LIFETIME } from "./constants";
import { Middleware, MiddlewareAPI, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  keepUnusedDataFor: CACHE_LIFETIME.TINY,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      console.log(action);
      
      if (action?.payload?.status === 302) {
              window.location.replace("https://admin.mypikaboo.com");
            }
    }

    return next(action)
  }