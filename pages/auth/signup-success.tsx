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
          <Image
              src="https://res.cloudinary.com/dic7regoe/image/upload/v1685795595/sinechat/Group_43451_1_dajvzk.png"
              alt="logo"
              className="w-28 lg:w-48 mx-auto"
              width={400}
              height={400}
            />
            <p className="text-[#166A37] text-2xl fw-600 mt-6">Account Creation Successful</p>
            <p className="mt-4">You will now be redirected to the <Link href='/auth/login'>login page</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
ForgetPassword.Layout = "Login";