import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import Link from "next/link";

const LoginForm = () => {
  const [isBusy, setIsBusy] = useState(false);
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
      <form className="fs-700">
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
                placeholder="*********"
                error={errors.password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="flex items-end justify-between">
            <div className="flex pb-2 gap-x-2 items-end">
            <TextInput
                type={InputType.checkbox}
                altClassName=" border-0"
              />
              <p className="relative -bottom-[6px]">Remember me</p>
            </div>
            <Link href='/auth/forget-password' className=" text-primary">Forget Password?</Link>
        </div>
        <div className="mt-12">
          <Button title={isBusy ? "loading" : "Login"} disabled={!isValid} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
