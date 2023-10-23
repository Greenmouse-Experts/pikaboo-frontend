import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../Ui/TextInput";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";
import {
  useLazyUpdateBillQuery,
  useLazyWasteUpdateWalletQuery,
} from "@/services/api/residenceSlice";
import { toast } from "react-toastify";

interface Props {
  bill: string | undefined;
  bin: string | undefined;
  id: number | undefined;
  close: () => void;
  refetch: () => void;
  waste?: boolean;
}

const SetMonthBillModal: FC<Props> = ({
  bill,
  bin,
  id,
  close,
  refetch,
  waste,
}) => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [update] = useLazyUpdateBillQuery();
  const [wasteUpdate] = useLazyWasteUpdateWalletQuery();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      bill: bill,
      bill_monthly: bill || "",
      waste_bin_monthly: bin,
      user_id: id,
    },
  });

  const onSubmit = async (data: any) => {
    setIsBusy(true);
    if (waste) {
      await wasteUpdate(data)
        .then((res: any) => {
          if (res.data.success) {
            toast.success(res.data.message);
            refetch();
            close();
          } else {
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
    } else
      await update(data)
        .then((res: any) => {
          if (res.data.success) {
            toast.success(res.data.message);
            refetch();
            close();
          } else {
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
      <div>
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
                  label="Initial Bill"
                  error={errors.bill?.message}
                  type={InputType.text}
                  {...field}
                  disabled
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="bill_monthly"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter new bill",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="New Bill"
                  error={errors.bill_monthly?.message}
                  type={InputType.number}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="waste_bin_monthly"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter new bin amount",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Waste Bin Monthly Fee"
                  error={errors.waste_bin_monthly?.message}
                  type={InputType.number}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-6">
            <Button
              title={
                isBusy ? (
                  <PulseSpinner size={13} color="white" />
                ) : (
                  "Update Billing"
                )
              }
              disabled={!isValid}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SetMonthBillModal;
