import React, {FC, useState} from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../Ui/TextInput";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";
import { useLazyUpdateBillQuery, useLazyUpdateWalletQuery, useLazyWasteUpdateWalletQuery } from "@/services/api/residenceSlice";
import { toast } from "react-toastify";
import { async } from "regenerator-runtime";

interface Props{
    bill: string | undefined
    close: () => void
    refetch: () => void
    id: number | undefined
    type?: string
}
const UpdateWallet:FC<Props> = ({id, bill, refetch, close, type}) => {
    const [isBusy, setIsBusy] = useState<boolean>(false)
    const [update] = useLazyUpdateWalletQuery()
    const [waste] = useLazyWasteUpdateWalletQuery()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      bill: bill,
      user_id: id
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true);
    type === "waste"? wasteAction(data) : adminAction(data)
  };
  const adminAction = async(data:any) => {
    await update(data)
    .then((res:any) => {
      if (res.data.success) {
        toast.success(res.data.message)
        refetch()
        close()
      }else {
          Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
              toast.error(value[0]);})
        setIsBusy(false);
      }
    })
    .catch((err) => {
      toast.error(err?.error?.data.message);
      setIsBusy(false);
    });
  }
  const wasteAction = async(data:any) => {
    await waste(data)
    .then((res:any) => {
      if (res.data.success) {
        toast.success(res.data.message)
        refetch()
        close()
      }else {
          Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
              toast.error(value[0]);})
        setIsBusy(false);
      }
    })
    .catch((err) => {
      toast.error(err?.error?.data.message);
      setIsBusy(false);
    });
  }
  return (
    <>
         <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="bill"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter a value",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Wallet Amount"
                  labelClassName="fw-500"
                  error={errors.bill?.message}
                  type={InputType.text}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-6">
        <Button title={isBusy? <PulseSpinner size={13} color='white'/> : "Update Billing"} disabled={!isValid} />
        </div>
        </form>
    </>
  )
}

export default UpdateWallet