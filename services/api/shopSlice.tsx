"use client";

import { BaseResult, ErrorResult } from "@/shared/utils/types";
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { requestAuthorization } from "../helpers";

export const shopApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.CREATE_CATEGORY}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    editCategory: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.EDIT_CATEGORY}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    deactivateCategory: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.DEACTIVATE_CATEGORY}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getCategories: builder.query<any, string | void>({
      query: () => ({
        url: `${ENDPOINT.GET_CATEGORY}`,
        method: ENDPOINT.HTTP_METHODS.GET,
        headers: {
          Authorization: requestAuthorization(),
        },
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.EXTENDED,
    }),

    createProduct: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.CREATE_PRODUCT}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    editProduct: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.UPDATE_PRODUCT}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    addProductImage: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.ADD_PRODUCT_IMAGE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    removeProductImage: builder.query<BaseResult | ErrorResult, any>({
      query: (payload) => ({
        url: `${ENDPOINT.REMOVE_PRODUCT_IMAGE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    deleteProduct: builder.query<BaseResult | ErrorResult, FormData>({
      query: (payload) => ({
        url: `${ENDPOINT.DESTROY_PRODUCT}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        headers: {
          Authorization: requestAuthorization(),
        },
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getProduct: builder.query<any, string | void>({
      query: () => ({
        url: `${ENDPOINT.GET_PRODUCT}`,
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
  useLazyCreateCategoryQuery,
  useLazyEditCategoryQuery,
  useLazyDeactivateCategoryQuery,
  useGetCategoriesQuery,
  useLazyCreateProductQuery,
  useLazyEditProductQuery,
  useGetProductQuery,
  useLazyAddProductImageQuery,
  useLazyDeleteProductQuery,
  useLazyRemoveProductImageQuery
} = shopApiSlice;
