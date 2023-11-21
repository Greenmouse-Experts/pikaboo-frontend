import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";
import { useLazyUpdateStatusQuery } from "@/services/api/shopSlice";

interface Props {
    item: any
    close: () => void
    refetch: () => void
}
const ChangeStatus:FC<Props> = ({item, close, refetch}) => {
    const [isBusy, setIsBusy] = useState(false);
    const [update] = useLazyUpdateStatusQuery()
    const {
      control,
      handleSubmit,
      setError,
      formState: { errors, isValid },
    } = useForm({
      mode: "onChange",
      defaultValues: {
        product_order_id: item.id,
        status: ""
      },
    });
    const onSubmit = async(data:any) => {
        setIsBusy(true);
    await update(data)
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
    }
  return (
    <>
         <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="mb-2 fw-500">Select Order Status</p>
            <Controller
              name="status"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter category name",
                },
              }}
              render={({ field }) => (
                <select className="w-full p-2 border border-gray-400 rounded" {...field}>
                    <option>Please select an option</option>
                    <option value={`PENDING`}>Pending</option>
                    <option value={`ONGOING`}>Ongoing</option>
                    <option value={`COMPLETED`}>Completed</option>
                </select>
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
    </>
  )
}

export default ChangeStatus