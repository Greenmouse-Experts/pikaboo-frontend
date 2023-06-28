import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../Ui/TextInput";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import Button from "../../Ui/Button";

const BasicInfoForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      owner: "",
      title: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      email: "",
      phone: "",
      phone2: "",
      confirm_password: "",
    },
  });

  return (
    <>
      <form>
        <div className="grid lg:grid-cols-4 gap-4">
          <div>
            <label className="mb-2 block mt-2">Title</label>
            <Controller
              name="owner"
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
                </select>
              )}
            />
          </div>
          <Controller
            name="title"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter title",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Others (title)"
                placeholder="Smith"
                error={errors.title?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
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
                error={errors.title?.message}
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
                value: true,
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
                error={errors.title?.message}
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
            <label className="mb-2 mt-2 block ">
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
          <div className="">
            <label className="mb-2 mt-2 block">
              Phone Number (Alternate)
            </label>
            <PhoneInputWithCountry
              international
              defaultCountry="NG"
              name="phone2"
              control={control}
              rules={{ required: true }}
              className="border lg:p-2 p-2 border-gray-400 rounded outline-none"
            />
            {errors.phone && (
              <p className="error text-red-500 fw-500">Invalid Phone Number</p>
            )}
          </div>
        </div>
        <div className="mt-4">
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
                label="Address"
                error={errors.title?.message}
                type={InputType.textarea}
                {...field}
              />
            )}
          />
        </div>
        <div className="flex justify-end my-12">
            <div className="w-6/12 lg:w-3/12">
            <Button title='Submit'/>
            </div>
        </div>
      </form>
    </>
  );
};

export default BasicInfoForm;
