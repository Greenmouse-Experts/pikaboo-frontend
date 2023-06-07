import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/shared/components/auth/SignupForm";


const Signup: AppPage = () => {
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
                <p className="text-xl lg:text-3xl ">Create a Free Account</p>
                <p className="mt-4">Let’s get you started with your SineChat account</p>
          </div>
          <div className="mt-8 lg:mt-16 lg:w-11/12 mx-auto">
            <SignupForm/>
          </div>
          <div className="mt-12 text-center">
            <p>Already have an account? <Link href='/auth/login' className="text-primary">Sign In</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
Signup.Layout = "Login";
