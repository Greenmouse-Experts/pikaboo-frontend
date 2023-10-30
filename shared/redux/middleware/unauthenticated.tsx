import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
// import { deleteFromLocalStorage, signOutUser } from "@/services/helpers";
import { toast } from "react-toastify";

export const unauthenticatedMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action) && action.payload.status === 401)
      toast.info('Session expired')
      // deleteFromLocalStorage('token')
      // signOutUser();
    return next(action);
  };
