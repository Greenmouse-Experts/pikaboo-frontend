import React from "react";
import { useRouter } from "next/router";
import LoginForm from "@/shared/components/auth/LoginForm";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import { FormatType } from "@/shared/utils/format";
import LoginSwiper from "@/shared/components/auth/LoginSwiper";

const FleetLogin: AppPage = () => {
  const router = useRouter();
  const type = router.query.sort;

  return (
    <>
      <div className="relative">
        <LoginSwiper />
      </div>
      <div className="absolute left-0 top-0 z-10 h-screen w-full">
        <div className="box ">
          <div className="grid h-screen lg:grid-cols-2 items-center">
            <div className="hidden lg:block">
              <div>
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687852832/pikaboo/Group_48062_rxv6ae.png"
                  alt=""
                  width={200}
                  height={80}
                  className="w-28 lg:w-56"
                />
                <p className="fw-600 mt-6 text-white lg:text-lg">
                  Sign in to your account
                </p>
              </div>
            </div>
            <div className="">
            <Link href='/'>
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687359890/pikaboo/Group_17_1_bhrcis.png"
                alt=""
                width={200}
                height={80}
                className="w-36 mx-auto mb-12 lg:hidden"
              />
              </Link>
              <div className="lg:w-10/12 mx-auto p-6 lg:p-12 bg-white">
              <p className="fs-700 lg:text-2xl mb-4 fw-600">
                Login as a {FormatType[type as keyof typeof FormatType]}
              </p>
              <Link href="/" className="text-primary underline fw-500">
                Switch Account
              </Link>
              <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FleetLogin;
FleetLogin.Layout = "Login";
