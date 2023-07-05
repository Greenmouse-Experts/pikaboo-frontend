import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../Ui/TextInput";
import { toast } from "react-toastify";
import { useLazyCreateZoneQuery } from "@/services/api/routineSlice";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";
const NaijaStates = require('naija-state-local-government');

interface Props {
    close: () => void
    refetch: () => void
}
const CreateZoneForm:FC<Props> = ({close, refetch}) => {
  const [isBusy, setIsBusy] = useState(false);
  const [create] = useLazyCreateZoneQuery();
  

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      lga: "",
      coordinate: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsBusy(true);
    await create(data)
      .then((res: any) => {
        if (res.data.success) {
          toast.success(res.data.message);
          setIsBusy(false);
          refetch()
          close()
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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="name"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter zone name",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Zone Name"
                  error={errors.name?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-4">
            <label className="mb-2 block mt-2">Local Government Area</label>
            <Controller
              name="lga"
              control={control}
              rules={{
                required: {
                  value: false,
                  message: "Please enter Lga name",
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
                  {
                    NaijaStates.lgas("Edo") && NaijaStates.lgas("Edo").lgas?.map((item:string, index:any) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))
                  }
                </select>
              )}
            />
          </div>
          <div className="mt-4">
            <Controller
              name="coordinate"
              control={control}
              rules={{
                required: {
                  value: false,
                  message: "Please Input Area Coordinates",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Area Coordinates"
                  error={errors.coordinate?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-10">
            <Button
              title={
                isBusy ? <PulseSpinner size={13} color="white" /> : "Create"
              }
              disabled={!isValid}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateZoneForm;
