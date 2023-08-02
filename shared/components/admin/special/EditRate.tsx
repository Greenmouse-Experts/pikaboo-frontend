import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../Ui/TextInput";
import { toast } from "react-toastify";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";
import { useLazyUpdateFlatQuery } from "@/services/api/routineSlice";

interface Props {
    close: () => void
    refetch: () => void
    item: any
}
const EditFlatRate:FC<Props> = ({close, refetch, item}) => {
    const [isBusy, setIsBusy] = useState(false);
  const [edit] = useLazyUpdateFlatQuery();
  
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      charges: item.charges || "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsBusy(true);
    await edit(data)
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="charges"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter charges",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Charge"
                  error={errors.charges?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-10">
            <Button
              title={
                isBusy ? <PulseSpinner size={13} color="white" /> : "Edit"
              }
              disabled={!isValid}
            />
          </div>
        </form>
    </>
  )
}

export default EditFlatRate