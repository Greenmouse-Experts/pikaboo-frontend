import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import { useLazyResetPasswordQuery } from "@/services/api/authSlice";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { PulseSpinner } from "../Ui/Loading";

const ResetForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [reset] = useLazyResetPasswordQuery()
  const router = useRouter()
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      code: "",
      password: "",
      password_confirmation: "",
    },
  });
  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await reset(data)
      .then((res:any) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setIsBusy(false)
          router.push('/auth/login')
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
    <div>
      <form className="fs-600" onSubmit={handleSubmit(onSubmit)}>
      <div>
          <Controller
            name="code"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please your reset code",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Reset Code"
                error={errors.code?.message}
                type={InputType.number}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-4">
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password is too short",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="New Password"
                placeholder="*********"
                error={errors.password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="password_confirmation"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Re-enter your password",
              },
              validate: (val) => {
                if (watch('password') != val) {
                  return "Your passwords do no match";
                }
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Confirm New Password"
                placeholder="*********"
                error={errors.password_confirmation?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-12">
          <Button
            title={isBusy ? <PulseSpinner size={13} color="white" /> : "Reset Password"}
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default ResetForm;
