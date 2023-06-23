import React from "react";
import TextInput, { InputType } from "@/shared/components/Ui/TextInput";
import { Controller, useForm } from "react-hook-form";
import Button from "@/shared/components/Ui/Button";

const AddFleetManagerForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      password: "",
      confirm_password: "",
    },
  });
  return (
    <>
      <form>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div>
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter First Name",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="First Name"
                  placeholder=""
                  error={errors.firstName?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter Last Name",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Last Name"
                  placeholder=""
                  error={errors.lastName?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mt-4">
          <div>
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter Email",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Email"
                  placeholder=""
                  error={errors.email?.message}
                  type={InputType.email}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter Phone Number",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Phone Number"
                  placeholder=""
                  error={errors.phoneNumber?.message}
                  type={InputType.tel}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mt-4">
          <div className="">
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
                  placeholder=""
                  error={errors.password?.message}
                  type={InputType.password}
                  {...field}
                />
              )}
            />
          </div>
          <div className="">
            <Controller
              name="confirm_password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter your password",
                },
                validate: (val) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Password"
                  placeholder=""
                  error={errors.confirm_password?.message}
                  type={InputType.password}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mt-8 lg:mt-16 lg:w-5/12">
            <Button title="Create Fleet Manager" />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddFleetManagerForm;
