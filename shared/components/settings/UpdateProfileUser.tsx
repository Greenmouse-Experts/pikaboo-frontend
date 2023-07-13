import React, { useState, FC } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import { PulseSpinner } from "../Ui/Loading";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { store, useAppDispatch, useAppSelector } from "@/shared/redux/store";
import { useLazyUpdateUserProfileQuery } from "@/services/api/authSlice";
import { saveUser } from "@/shared/redux/reducers/userSlice";
import { toast } from "react-toastify";

interface Props {
    close: () => void
}

const UpdateProfileFormUsers:FC<Props> = ({close}) => {
    const user = useAppSelector((state) => state.user.user)
  const [isBusy, setIsBusy] = useState(false);
  const [update] = useLazyUpdateUserProfileQuery()
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: user.firstname,
      last_name: user.lastname,
      email: user.email,
      phone: user.phone || "",
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await update(data)
      .then((res:any) => {
        if (res.data.success) {
          dispatch(
            saveUser({
                ...store.getState().user.user,
                firstname: res.data.data.first_name,
                lastname: res.data.data.last_name,
                email: res.data.data.email,
                phone: res.data.data.phone,
          }))
          toast.success(res.data.message)
          close()
        }else {
          Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
            toast.error(value[0]);
          });
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
        <div className="grid lg:grid-cols-2 gap-4">
          <Controller
            name="first_name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your first name",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="First Name"
                error={errors.first_name?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
          <Controller
            name="last_name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your last name",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Last Name"
                error={errors.last_name?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
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
                error={errors.email?.message}
                type={InputType.email}
                {...field}
              />
            )}
          />
          <div className="">
                  <label className="mb-2 mt-2 block text-gray-500">Phone Number</label>
                  <PhoneInputWithCountry
                    international
                    defaultCountry="NG"
                    name="phone"
                    control={control}
                    rules={{ required: true }}
                    className="border lg:p-2 p-2 border-gray-400 rounded outline-none"
                  />
                  {errors.phone && (
                    <p className="error text-red-500 fw-500">
                      Invalid Phone Number
                    </p>
                  )}
                </div>
        </div>
        <div className="mt-10">
          <Button
            title={
              isBusy ? (
                <PulseSpinner size={13} color="white" />
              ) : (
                "Update Profile"
              )
            }
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileFormUsers;
