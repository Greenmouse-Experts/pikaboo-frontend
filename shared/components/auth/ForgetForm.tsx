import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import { useLazyForgetPasswordQuery } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { PulseSpinner } from "../Ui/Loading";

const ForgetForm = () => {
  const router = useRouter()
  const [isBusy, setIsBusy] = useState(false);
  const [forget] = useLazyForgetPasswordQuery()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await forget(data)
      .then((res:any) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setIsBusy(false)
          router.push(`/auth/reset-password?mail=${data.email}`)
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
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your email",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Registered Email Address"
                placeholder="pikaboo@gmail.com"
                error={errors.email?.message}
                type={InputType.email}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-12">
          <Button title={isBusy ? <PulseSpinner size={13} color="white" />: "Continue"} disabled={!isValid} />
        </div>
      </form>
    </div>
  );
};

export default ForgetForm;
