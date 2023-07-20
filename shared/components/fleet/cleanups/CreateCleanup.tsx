import React, { FC, useState } from "react";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";
import { Controller, useForm } from "react-hook-form";
import { useGetZonesQuery } from "@/services/api/routineSlice";
import { ZonesList } from "@/shared/utils/types";
import { useLazyCreateScheduleQuery } from "@/services/api/scheduleSlice";
import { toast } from "react-toastify";

interface Props {
  close: () => void
  refetch: () => void
}
const CreateCleanupModal:FC<Props> = ({close, refetch}) => {
  const {data:zone, isLoading} = useGetZonesQuery()
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [create] = useLazyCreateScheduleQuery()
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      zone_id: "",
      schedule_date: "",
    },
  });

    const onSubmit = async (data:any) => {
      setIsBusy(true);
      await create(data)
        .then((res:any) => {
          if (res.data.success) {
            toast.success(res.data.message)
            close()
            refetch()
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
        <div>
          <label className="block mt-3 mb-1">Select Zone</label>
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
              {
                zone && zone.data.map((item:ZonesList) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))
              }
            </select>
            )}
          />
        </div>
        <div className="mt-4">
        <label className="block mt-3 mb-1">Scheduled Date</label>
          <Controller
            name="schedule_date"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter a date",
              },
            }}
            render={({ field }) => <input type="date" {...field} className="w-full p-2 border border-gray-400 rounded"/>}
          />
          <p className="text-red-600">{errors.schedule_date?.message}</p>
        </div>
        <div className="mt-8">
          <Button
            title={
              isBusy ? (
                <PulseSpinner size={13} color="white" />
              ) : (
                "Create Schedule Request"
              )
            }
            disabled={!isValid}
          />
        </div>
      </form>
    </>
  );
};

export default CreateCleanupModal;
