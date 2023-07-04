import React, { useState } from "react";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";
import { Controller, useForm } from "react-hook-form";

const CreateCleanupModal = () => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      zone: "",
      schedule_date: "",
      email: "",
    },
  });

  //   const onSubmit = async (data:any) => {
  //     setIsBusy(true);
  //     await create(data)
  //       .then((res:any) => {
  //         if (res.data.success) {
  //           toast.success(res.data.message)
  //           reset()
  //           refetch()
  //           setIsBusy(false);
  //         }else {
  //           toast.error(res.data.message);
  //           setIsBusy(false);
  //         }
  //       })
  //       .catch((err) => {
  //         toast.error(err?.error?.data.message);
  //         setIsBusy(false);
  //       });
  //   };
  return (
    <>
      <form>
        <div>
          <label className="block mt-3 mb-1">Select Zone</label>
          <Controller
            name="zone"
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
                className="w-full border border-gray-400 rounded p-2"
              >
                <option value="" disabled>
                  Select Option
                </option>
                <option value="male">Ugbowo Central</option>
                <option value="female">Akpapava District</option>
                <option value="others">Siloco Road</option>
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
                "Set Cleanup Zone"
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
