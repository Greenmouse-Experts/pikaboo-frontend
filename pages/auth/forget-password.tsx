import ForgetForm from "@/shared/components/auth/ForgetForm";
import LoginForm from "@/shared/components/auth/LoginForm";
import LoginSwiper from "@/shared/components/auth/LoginSwiper";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ForgetPassword: AppPage = () => {
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
                  alt="logo"
                  width={200}
                  height={80}
                  className="w-28 lg:w-56"
                />
                <p className="fw-600 mt-6 text-white lg:text-lg">
                  Reset your password
                </p>
              </div>
            </div>
            <div className="">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687852832/pikaboo/Group_48062_rxv6ae.png"
                  alt="logo"
                  width={200}
                  height={80}
                  className="w-56 mx-auto mb-12 lg:hidden"
                />
              </Link>
              <div className="lg:w-10/12 mx-auto p-6 lg:p-12 bg-white">
                <div className="text-center ">
                  <p className="text-xl lg:text-2xl fw-500">Forgot Password</p>
                  <p className="mt-4">
                    Did you forget your password? No worries! We will help you
                    recover it
                  </p>
                </div>
                <div className="mt-8 lg:mt-12">
                  <ForgetForm />
                </div>
                <div className="mt-12 text-center">
                  <p>
                    Back to{" "}
                    <Link href="/auth/login" className="text-primary">
                      Login
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
ForgetPassword.Layout = "Login";
