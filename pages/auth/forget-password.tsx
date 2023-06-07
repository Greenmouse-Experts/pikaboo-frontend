import ForgetForm from "@/shared/components/auth/ForgetForm";
import LoginForm from "@/shared/components/auth/LoginForm";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ForgetPassword: AppPage = () => {
  return (
    <>
      <div className="box py-16">
        <div className="lg:w-5/12 mx-auto">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dic7regoe/image/upload/v1685784940/sinechat/Frame_128_2_owb6zz.png"
              alt="logo"
              className="w-48 lg:w-96 mx-auto"
              width={400}
              height={400}
            />
          </Link>
          <div className="text-center mt-8 lg:mt-16">
                <p className="text-xl lg:text-3xl ">Forgot Password</p>
                <p className="mt-4">Did you forget your password? No worries! We will help you recover it</p>
          </div>
          <div className="mt-8 lg:mt-16 lg:w-11/12 mx-auto">
            <ForgetForm/>
          </div>
          <div className="mt-12 text-center">
            <p>Back to <Link href='/auth/login' className="text-primary">Login</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
ForgetPassword.Layout = "Login";