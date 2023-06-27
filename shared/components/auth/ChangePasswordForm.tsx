import React, { useState, FC } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import { useLazyChangePasswordQuery } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { PulseSpinner } from "../Ui/Loading";

interface Props {
    close: () => void
}

const ChangeAdminPassword:FC<Props> = ({close}) => {
  const [isBusy, setIsBusy] = useState(false);
  const [change] = useLazyChangePasswordQuery()
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
        old_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await change(data)
      .then((res:any) => {
        if (res.data.success) {
          toast.success(res.data.message)
          close()
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
      <form className="fs-600" onSubmit={handleSubmit(onSubmit)} >
        <div>
          <Controller
            name="old_password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Old Password"
                error={errors.old_password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="new_password"
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
                label="New Password"
                error={errors.new_password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="new_password_confirmation"
            control={control}
            rules={{
                required: {
                  value: true,
                  message: "Please enter your password",
                },
                validate: (val) => {
                  if (watch('new_password') != val) {
                    return "Your passwords do no match";
                  }
                },
              }}
            render={({ field }) => (
              <TextInput
                label="Re-enter Password"
                error={errors.new_password_confirmation?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-12">
          <Button
            title={isBusy ? <PulseSpinner size={13} color="white" /> : "Change Password"}
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default ChangeAdminPassword;
