import React, { FC, useState } from 'react'
import { useLazyEditTruckQuery } from '@/services/api/wasteSlice';

import { toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';
import { TruckItem } from '@/shared/utils/types/routine';
import TextInput, { InputType } from '../../Ui/TextInput';
import Button from '../../Ui/Button';
import { PulseSpinner } from '../../Ui/Loading';

interface Props{
    data: TruckItem
    refetch: () => void
    close: () => void
}
const EditTruck:FC<Props> = ({refetch, data, close}) => {
    const [isBusy, setIsBusy] = useState<boolean>(false)
  const [create] = useLazyEditTruckQuery()
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
      make: data.make || "",
      year: data.year || "",
      vin: data.vin || "",
      model: data.model || "",
      color: data.color || "",
      fuel_type: data.fuel_type || "",
      date_purchase: data.date_purchase || "",
      condition: data.condition || "",
      truck_id: data.id
    },
  });
  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await create(data)
      .then((res:any) => {
        if (res.data.success) {
          toast.success(res.data.message)
          refetch()
          close()
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
        <div>
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
        <div className="">
          <div className="mt-8 lg:mt-16">
          <Button title={isBusy ? <PulseSpinner size={13} color="white" />: "Edit Truck Details"} disabled={!isValid} />
          </div>
        </div>
      </form>
        </div>
    </>
  )
}

export default EditTruck