import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginSwiper from "@/shared/components/auth/LoginSwiper";
import ResetForm from "@/shared/components/auth/ResetForm";
import { AppPage } from "@/shared/components/layouts/Types";
import { useRouter } from "next/router";
import { useLazyForgetPasswordQuery } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { PulseSpinner } from "@/shared/components/Ui/Loading";



const ResetPassword: AppPage = () => {

  const router = useRouter()
  const [isBusy, setIsBusy] = useState(false);
  const [forget] = useLazyForgetPasswordQuery()

  const resendCode = async () => {
    const data = {
      email: router.query.mail
    }
    setIsBusy(true);
    await forget(data)
      .then((res:any) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setIsBusy(false)
        }else {
          toast.error(res.data.message);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error(err?.error?.data.message);
        setIsBusy(false);
      });
  };

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
                  <p className="text-xl lg:text-2xl fw-500">Reset Password</p>
                  <p className="mt-4">
                    A password reset code has been sent to you, complete the form with the code and your new preffered password.
                  </p>
                </div>
                <div className="mt-5 lg:mt-8">
                  <ResetForm />
                </div>
                <div className="mt-7 text-center">
                  {
                    isBusy? <PulseSpinner size={13} color="green" /> : <p className="text-primary fw-500 underline mb-4" onClick={resendCode}>Resend Code</p>
                  }
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

export default ResetPassword;
ResetPassword.Layout = "Login";