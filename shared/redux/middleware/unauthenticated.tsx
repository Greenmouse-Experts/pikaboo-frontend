import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { signOutUser } from "@/services/helpers";

export const unauthenticatedMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action) && action.payload.status === 401)
      signOutUser();
    return next(action);
  };
