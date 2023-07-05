"use client";

import React from "react";
import { useRouter } from "next/router";
import useAuthCheck from "@/hooks/useAuthCheck";

const AddAuth = (Component: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const { IsAuth } = useAuthCheck();

    if (!IsAuth) {
      router.push("/auth/login", { query: { callback: router.pathname } });
      return null;
    }

    return <Component {...props} />;
  };

  Wrapper.displayName = `AddAuth(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapper;
};

export default AddAuth;