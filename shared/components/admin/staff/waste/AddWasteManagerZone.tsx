import React, { FC, useState } from "react";
import TextInput, { InputType } from "@/shared/components/Ui/TextInput";
import { Controller, useForm } from "react-hook-form";
import Button from "@/shared/components/Ui/Button";
import {
  useLazyAdminAssignZoneQuery,
} from "@/services/api/onboardSlice";
import { toast } from "react-toastify";
import { PulseSpinner } from "@/shared/components/Ui/Loading";
import { useGetZonesQuery } from "@/services/api/routineSlice";
import { ZonesList } from "@/shared/utils/types";

interface Props {
  refetch: () => void;
  item: any;
  close: () => void;
}
const AddWasteManagerZoneForm: FC<Props> = ({ refetch, item, close }) => {
  const { data: zone, isLoading } = useGetZonesQuery();
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [assign] = useLazyAdminAssignZoneQuery();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: `${item.first_name} ${item.last_name}`,
      zone_id: item?.zone?.id || "",
      user_id: `${item.id}`,
    },
  });
  const onSubmit = async (data: any) => {
    setIsBusy(true);
    await assign(data)
      .then((res: any) => {
        if (res.data.success) {
          toast.success(res.data.message);
          refetch();
          close();
          setIsBusy(false);
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
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter First Name",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Name"
                placeholder=""
                error={errors.name?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-4">
          <label className="mb-2 block mt-2">Zone</label>
          <Controller
            name="zone_id"
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
                {zone &&
                  zone.data.map((item: ZonesList) => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>
        <div className="mt-8 lg:mt-16">
          <Button
            title={
              isBusy ? <PulseSpinner size={13} color="white" /> : "Assign Zone"
            }
            disabled={!isValid}
          />
        </div>
      </form>
    </>
  );
};

export default AddWasteManagerZoneForm;
