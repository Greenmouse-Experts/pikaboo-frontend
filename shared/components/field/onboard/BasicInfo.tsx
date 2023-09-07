import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../Ui/TextInput";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import Button from "../../Ui/Button";
import { useAppDispatch, useAppSelector } from "@/shared/redux/store";
import { saveForm } from "@/shared/redux/reducers/onboardSlice";

interface Props {
  next: () => void;
}
const BasicInfoForm: FC<Props> = ({ next }) => {
  const form = useAppSelector((state) => state.onboard.form);
  const dispatch = useAppDispatch();
  const {
    control,
    watch,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title_others: form.title || "",
      title: form.title || "",
      first_name: form.first_name || "",
      last_name: form.last_name || "",
      middle_name: form.middle_name || "",
      email: form.email || "",
      phone: form.phone || "",
      phone2: form.phone2 || "",
      address: form.address || "",
      gender: form.gender || "",
    },
  });

  const onSubmit = (data: any) => {
    dispatch(
      saveForm({
        title: data.title,
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        phone2: data.phone2,
        address: data.address,
        gender: data.gender
      })
    );
    if (isValid) {
      next();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-4 gap-4">
          <div>
            <label className="mb-2 block mt-2">Title</label>
            <Controller
              name="title"
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
                  <option value="Mr">MR</option>
                  <option value="Mrs">MRS</option>
                  <option value="Cheif">CHIEF</option>
                  <option value="Prof">PROF.</option>
                  <option value="Dr">DR.</option>
                  <option value="Pastor">PASTOR</option>
                  <option value="Others">Others</option>
                </select>
              )}
            />
          </div>
          {watch("title") == "Others" && (
            <Controller
              name="title_others"
              control={control}
              rules={{
                required: {
                  value: false,
                  message: "Please enter title",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Others (title)"
                  placeholder="Smith"
                  error={errors.title_others?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          )}
          <div>
            <label className="mb-2 block mt-2">Gender</label>
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
                  className="w-full border border-gray-400 rounded h-[42px]"
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              )}
            />
            {errors?.gender?.message}
          </div>
        </div>
        <div className="mt-4 grid lg:grid-cols-3 gap-4">
          <Controller
            name="first_name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter first name",
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
            name="middle_name"
            control={control}
            rules={{
              required: {
                value: false,
                message: "Please enter middle name",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Middle Name"
                error={errors.middle_name?.message}
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
                message: "Please enter last name",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Last Name"
                error={errors.first_name?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-4 grid lg:grid-cols-3 gap-4">
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter first name",
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
            <label className="mb-2 mt-2 block ">Phone Number (WhatsApp)</label>
            <PhoneInputWithCountry
              international
              defaultCountry="NG"
              name="phone"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^(\+?234|0)?[789]\d{9}$/,
                  message: "Please Enter A Valid Number",
                },
              }}
              className="border lg:p-2 p-2 border-gray-400 rounded outline-none"
            />
            {errors.phone && (
              <p className="error text-red-500 fw-500">Invalid Phone Number</p>
            )}
          </div>
          <div className="">
            <label className="mb-2 mt-2 block">Phone Number (Alternate)</label>
            <PhoneInputWithCountry
              international
              defaultCountry="NG"
              name="phone2"
              control={control}
              rules={{
                required: false,
                pattern: {
                  value: /^(\+?234|0)?[789]\d{9}$/,
                  message: "Please Enter A Valid Number",
                },
              }}
              className="border lg:p-2 p-2 border-gray-400 rounded outline-none"
            />
            {errors.phone2 && (
              <p className="error text-red-500 fw-500">Invalid Phone Number</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <Controller
            name="address"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter Address",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Address"
                error={errors.address?.message}
                type={InputType.textarea}
                {...field}
              />
            )}
          />
        </div>
        <div className="flex justify-end my-12">
          <div className="w-6/12 lg:w-3/12">
            <Button title="Next" disabled={!isValid} />
          </div>
        </div>
      </form>
    </>
  );
};

export default BasicInfoForm;
