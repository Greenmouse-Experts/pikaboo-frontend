import React, {FC, useState} from "react";
import TextInput, { InputType } from "@/shared/components/Ui/TextInput";
import { Controller, useForm } from "react-hook-form";
import Button from "@/shared/components/Ui/Button";
import { toast } from "react-toastify";
import { PulseSpinner } from "../../Ui/Loading";
import { useLazyCreateTruckQuery } from "@/services/api/wasteSlice";

interface Props {
  refetch: () => void
}
const AddWasteTruckForm:FC<Props> = ({refetch}) => {
  const [isBusy, setIsBusy] = useState<boolean>(false)
  const [create] = useLazyCreateTruckQuery()
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
      make: "",
      year: "",
      vin: "",
      model: "",
      color: "",
      fuel_type: "",
      date_purchase: "",
      condition: "",
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
              name="make"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter vehicle make",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Vehicle Make"
                  placeholder=""
                  error={errors.make?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="year"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter year",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Production Year"
                  placeholder=""
                  error={errors.year?.message}
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
              name="vin"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter vin",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Vehicle Identification Number"
                  placeholder=""
                  error={errors.vin?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="model"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select an option",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Vehicle Model"
                  placeholder=""
                  error={errors.model?.message}
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
              name="color"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter vehicle color",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Vehicle Color"
                  placeholder=""
                  error={errors.color?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="fuel_type"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please input fuel type",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Fuel Pump Type "
                  placeholder=""
                  error={errors.fuel_type?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mt-4">
          <div>
            <label className="mt-2 block">Date of Purchase</label>
            <Controller
              name="date_purchase"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter date of purchase",
                },
              }}
              render={({ field }) => (
                <input type="date" className="w-full mt-2 p-2 rounded border border-gray-400"
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="condition"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please input a condition",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Vehicle Condition"
                  placeholder=""
                  error={errors.condition?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mt-8 lg:mt-16 lg:w-5/12">
          <Button title={isBusy ? <PulseSpinner size={13} color="white" />: "Create Waste Manager"} disabled={!isValid} />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddWasteTruckForm;
