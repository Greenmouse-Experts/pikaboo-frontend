import React, { useState, createRef } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../Ui/Button";
import Link from "next/link";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";

const LoginForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const recaptchaRef = createRef<ReCAPTCHA>();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      user: "",
      password: "",
    },
  });
  return (
    <div>
      <form className="fs-600 mt-10">
        <div>
          <Controller
            name="user"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your email",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Email"
                icon={<MdOutlineEmail className="text-primary text-2xl mx-2"/>}
                placeholder="victorchigozie@gmail.com"
                error={errors.user?.message}
                type={InputType.email}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 5,
                message: "Password is too short",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Password"
                icon={<MdLockOutline className="text-primary text-2xl mx-2"/>}
                placeholder="*********"
                error={errors.password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="flex items-end justify-end mt-1">
          <Link href="/auth/forget-password" className=" text-primary">
            Forget Password?
          </Link>
        </div>
        <div className="flex mt-5 pb-2 gap-x-2 items-end">
          <TextInput type={InputType.checkbox} altClassName=" border-0" />
          <p className="relative -bottom-[6px]">
            I agree to{" "}
            <Link href="/" className="text-primary fw-500">
              Terms & Conditions
            </Link>
          </p>
        </div>
        <div className="mt-6">
        {/* <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={`${process.env.REACT_APP_SITE_KEY}`}
        /> */}
        </div>
        <div className="mt-10">
          {/* <Button title={isBusy ? "loading" : "Login"} disabled={!isValid} /> */}
          <Link href='/auth/admin' className="btn-like block text-center py-3 text-xl">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
