"use client";

import { getLocalToken } from "@/services/helpers";
import { selectUser } from "@/shared/redux/reducers/userSlice";
import { resetUser } from "@/shared/redux/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "@/shared/redux/store";

const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const authenticatedUser = useAppSelector(selectUser);

  const AuthenticatedUserHaveValidToken = authenticatedUser.user.token || null;

  const IsAuthenticated = !!authenticatedUser.user.token;

  const IsAuth = getLocalToken("token");

  const LoggedInUser = authenticatedUser.user;

  const SignOut = () => dispatch(resetUser());

  const isAdmin = () => {
    if (authenticatedUser.user.admin_type === "Board") {
      return false;
    } else return true;
  };

  return {
    AuthenticatedUserHaveValidToken,
    IsAuthenticated,
    IsAuth,
    SignOut,
    LoggedInUser,
    isAdmin,
  };
};

export default useAuthCheck;
