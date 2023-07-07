import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import Link from "next/link";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { PulseSpinner } from "../Ui/Loading";
import { useRouter } from "next/router";
import {  useLazyUserLoginQuery } from "@/services/api/authSlice";
import { useAppDispatch } from "@/shared/redux/store";
import { saveUser } from "@/shared/redux/reducers/userSlice";
import {  storeLocalToken } from "@/services/helpers";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const [isBusy, setIsBusy] = useState(false);
  const [login] = useLazyUserLoginQuery()
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await login(data)
      .then((res:any) => {
        if (res.data.success) {
          dispatch(
            saveUser({
                token: res.data.token,
                firstname: res.data.data.first_name,
                lastname: res.data.data.last_name,
                id: res.data.data.id,
                email: res.data.data.email,
                phone: res.data.data.phone,
                user_type: res.data.data.account_type,
                admin_type: res.data.data.role,
                avatar: res.data.data.avatar
          }))
          storeLocalToken("token", res.data.token) 
          toast.success(res.data.message)
          if(res.data.data.account_type === "Fleet Manager"){
            router.push('/fleet')
          }else if(res.data.data.account_type === "Waste Manager Zone"){
            router.push('/waste-zone')
          }else if(res.data.data.account_type === "Waste Manager Truck"){
            router.push('/waste-truck')
          }else if(res.data.data.account_type === "Field Operator"){
            router.push('/field')
          }else{}
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
      <form className="fs-600 mt-10" onSubmit={handleSubmit(onSubmit)}>
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
                label="Email"
                icon={<MdOutlineEmail className="text-primary text-2xl mx-2"/>}
                placeholder="pikaboo@gmail.com"
                error={errors.email?.message}
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
        <div className="mt-10">
        <Button title={isBusy? <PulseSpinner size={13} color='white'/> : "Login"} disabled={!isValid} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
