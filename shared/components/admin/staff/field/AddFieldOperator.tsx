import React, {FC, useState} from "react";
import TextInput, { InputType } from "@/shared/components/Ui/TextInput";
import { Controller, useForm } from "react-hook-form";
import Button from "@/shared/components/Ui/Button";
import { useLazyCreateFieldQuery } from "@/services/api/onboardSlice";
import { toast } from "react-toastify";
import { PulseSpinner } from "@/shared/components/Ui/Loading";

interface Props {
  refetch: () => void
}
const AddFieldOperatorForm:FC<Props> = ({refetch}) => {
  const [isBusy, setIsBusy] = useState<boolean>(false)
  const [create] = useLazyCreateFieldQuery()
  const {
    control,
    handleSubmit,
    setError,
    reset,
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
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await create(data)
      .then((res:any) => {
        if (res.data.success) {
          toast.success(res.data.message)
          refetch()
          reset()
          setIsBusy(false);
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
                  value: 7,
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
        <div className="flex justify-end">
          <div className="mt-8 lg:mt-16 lg:w-5/12">
            <Button title={isBusy? <PulseSpinner size={13} color='white'/> : "Create Field Operator"} disabled={!isValid} />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddFieldOperatorForm;
