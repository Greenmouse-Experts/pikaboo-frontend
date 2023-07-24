import React, { FC, useState } from "react";
import TextInput, { InputType } from "@/shared/components/Ui/TextInput";
import { Controller, useForm } from "react-hook-form";
import Button from "@/shared/components/Ui/Button";
import { useLazyCreateDriverQuery } from "@/services/api/onboardSlice";
import { toast } from "react-toastify";
import { PulseSpinner } from "../../Ui/Loading";
import { useGetTrucksQuery } from "@/services/api/wasteSlice";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";

interface Props {
  refetch: () => void;
}
const AddPersonnelForm: FC<Props> = ({ refetch }) => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const { data: truck, isLoading } = useGetTrucksQuery();
  const [create] = useLazyCreateDriverQuery();
  const {
    control,
    handleSubmit,
    reset,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      password: "",
      password_confirmation: "",
      phone: "",
      truck_id: "",
    },
  });
  const onSubmit = async (data: any) => {
    setIsBusy(true);
    await create(data)
      .then((res: any) => {
        if (res.data.success) {
          toast.success(res.data.message);
          refetch();
          reset();
          setIsBusy(false);
        } else {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div>
            <Controller
              name="first_name"
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
                  error={errors.first_name?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="last_name"
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
                  error={errors.last_name?.message}
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
            <label className="block mt-3 mb-1">Gender</label>
            <Controller
              name="gender"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select an option",
                },
              }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full border border-gray-400 rounded p-2"
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
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
              name="password_confirmation"
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
                  error={errors.password_confirmation?.message}
                  type={InputType.password}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mt-4">
          <div className="mt-3">
            <label className="mb-2 mt-2 block text-gray-500">
              Phone Number
            </label>
            <PhoneInputWithCountry
              international
              defaultCountry="NG"
              name="phone"
              control={control}
              rules={{ required: true }}
              className="border lg:p-2 p-2 border-gray-400 rounded outline-none"
            />
            {errors.phone && (
              <p className="error text-red-500 fw-500">Invalid Phone Number</p>
            )}
          </div>
          <div className="mt-3">
            <label className="mb-2 block mt-2">Trucks</label>
            <Controller
              name="truck_id"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select an option",
                },
              }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full border border-gray-400 rounded h-[42px]"
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  {truck &&
                    truck.data.map((item: any) => (
                      <option value={item.id} key={item.id}>
                        {item.make} {item.model}
                      </option>
                    ))}
                </select>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mt-8 lg:mt-16 lg:w-5/12">
            <Button
              title={
                isBusy ? (
                  <PulseSpinner size={13} color="white" />
                ) : (
                  "Create Service Personnel"
                )
              }
              disabled={!isValid}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPersonnelForm;
