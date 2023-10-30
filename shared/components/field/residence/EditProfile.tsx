import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";
import TextInput, { InputType } from "../../Ui/TextInput";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import { useLazyUpdatePersonalProfileQuery } from "@/services/api/residenceSlice";
import { formatPhoneNum } from "@/shared/utils/format";

interface Props {
  close: () => void;
  user: any;
  refetch: () => void;
}
const EditProfile: FC<Props> = ({ close, user, refetch }) => {
  const [isBusy, setIsBusy] = useState(false);
  const [image, setImage] = useState<any>();
  const [ update ] = useLazyUpdatePersonalProfileQuery()
  const handleFileUpload = (e: any) => {
    setImage(e.target.files[0]);
  };
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: user.title || "",
      gender: user.gender || "",
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      middle_name: user.middle_name || "",
      email: user.email || "",
      phone: formatPhoneNum(user.phone) || "",
      phone2: formatPhoneNum(user.phone2) || "",
      no_of_residents: user.building_information.no_of_residents || "",
      house_number: user.building_information.house_number || "",
      street_name: user.building_information.street_name || "",
      area1: user.building_information.area1 || "",
      area2: user.building_information.area2 || "",
      town: user.building_information.town_city || "",
      current_bill: user?.recent_bill?.current_bill || "",
      current_monthly_bill: user?.recent_bill?.current_monthly_bill || "",
      waste_bin: user.building_information.waste_bill || ""
    },
  });
  const onSubmit = async(data: any) => {
    setIsBusy(true)
    const fname = data.first_name && data.first_name.toUpperCase()
    const lname = data.last_name && data.last_name.toUpperCase()
    const mname = data.middle_name && data.middle_name.toUpperCase()
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as any);
    });
    formData.append("first_name", fname)
    formData.append("last_name", lname)
    formData.append("middle_name", mname)
    formData.append("building_image", image);
    const payload = {
        id: user.id,
        data: formData
    }
    await update(payload)
        .then((res: any) => {
          if (res.data.success) {
            toast.success(res.data.message);
            setIsBusy(false);
            refetch()
            close()
          } else {
            if(res?.data?.errors){
              Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
                toast.error(value[0]);
              });
            }else toast.error(res?.data.message)
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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-h-[300px] overflow-y-auto lg:pr-4">
            <div className="grid lg:grid-cols-3 gap-4">
              <div>
                <label className="mb-2 block mt-2">Title</label>
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: false,
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

              <div>
                <label className="mb-2 block mt-2">Gender</label>
                <Controller
                  name="gender"
                  control={control}
                  rules={{
                    required: false
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
              </div>
            </div>
            <div className="grid lg:grid-cols-3 mt-4 gap-x-4">
              <div>
                <Controller
                  name="first_name"
                  control={control}
                  rules={{
                    required: false
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
              </div>
              <div>
                <Controller
                  name="middle_name"
                  control={control}
                  rules={{
                    required: false,
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
              </div>
              <div>
                <Controller
                  name="last_name"
                  control={control}
                  rules={{
                    required: false,
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
              </div>
            </div>
            <div className="grid lg:grid-cols-3 mt-4 gap-4">
              <div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: false,
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
              </div>
              <div className="">
                <label className="mb-2 mt-2 block ">Phone Number</label>
                <PhoneInputWithCountry
                  international
                  defaultCountry="NG"
                  name="phone"
                  control={control}
                  // rules={{
                  //   required: false,
                  //   pattern: {
                  //     value: /^(\+?234|0)?[789]\d{9}$/,
                  //     message: "Please Enter A Valid Number",
                  //   },
                  // }}
                  className="border lg:p-2 p-2 border-gray-400 rounded outline-none"
                />
                {errors.phone && (
                  <p className="error text-red-500 fw-500">
                    Invalid Phone Number
                  </p>
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
                  rules={{
                    required: false
                  }}
                  className="border lg:p-2 p-2 border-gray-400 rounded outline-none"
                />
                {errors.phone2 && (
                  <p className="error text-red-500 fw-500">
                    Invalid Phone Number
                  </p>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-3 mt-4 gap-4">
              <div>
                <Controller
                  name="no_of_residents"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="No Of Residents"
                      error={errors.no_of_residents?.message}
                      type={InputType.number}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="house_number"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="House Number"
                      error={errors.house_number?.message}
                      type={InputType.text}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="street_name"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Street Name"
                      error={errors.street_name?.message}
                      type={InputType.text}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-3 mt-4 gap-4">
              <div>
                <Controller
                  name="area1"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Area Name"
                      error={errors.area1?.message}
                      type={InputType.text}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="area2"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Area (Alternative area)"
                      error={errors.area2?.message}
                      type={InputType.text}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="town"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Town"
                      error={errors.town?.message}
                      type={InputType.text}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-3 mt-4 gap-4">
              <div>
                <Controller
                  name="current_bill"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Total waste bill"
                      error={errors.current_bill?.message}
                      type={InputType.number}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="current_monthly_bill"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Current Monthly Bill"
                      error={errors.current_monthly_bill?.message}
                      type={InputType.number}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="waste_bin"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Waste Bin Needed"
                      error={errors.waste_bin?.message}
                      type={InputType.number}
                      {...field}
                    />
                  )}
                />
              </div>
              {/* <div>
                <label className="mt-3 block">Building Image</label>
                <input
                  type="file"
                  multiple
                  className="mt-[2px] border-gray-400 w-full border p-2 rounded"
                  onChange={(e: any) => handleFileUpload(e)}
                />
              </div> */}
            </div>
          </div>
          <div>
            <div className="mt-10">
              <Button
                title={
                  isBusy ? <PulseSpinner size={13} color="white" /> : "Save"
                }
                disabled={!isValid}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
