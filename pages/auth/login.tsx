import React from "react";
import { useRouter } from "next/router";
import LoginForm from "@/shared/components/auth/LoginForm";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import { FormatType } from "@/shared/utils/format";


const FleetLogin: AppPage = () => {
  const router = useRouter()
  const type = router.query.sort
  
  return (
    <>
      <div className="box">
        <div className=" pt-10">
          <Image
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648026/pikaboo/Group_26_2_cq9sv4.png"
            alt=""
            width={200}
            height={80}
            className="w-28 lg:w-44"
          />
        </div>
        <div className="grid lg:grid-cols-2 items-center">
          <div className="hidden lg:block">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648027/pikaboo/OTP-Authentication-Security_1_mmglvs.png"
              alt=""
              width={900}
              height={900}
              className="w-full"
            />
          </div>
          <div className="lg:pl-24 pt-20">
            <p className="fs-600 lg:text-2xl mb-4 fw-600">Login as a {FormatType[type as keyof typeof FormatType]}</p>
            <Link href="/" className="text-primary underline fw-500">Switch Account</Link>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default FleetLogin;
FleetLogin.Layout = "Login";
