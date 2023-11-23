import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { useLazySwitchUserTypeQuery } from "@/services/api/onboardSlice";
import Button from "../Ui/Button";
import { PulseSpinner } from "../Ui/Loading";

interface Props {
  item: any;
  close: () => void;
  refetch: () => void;
}
const SwitchAccount: FC<Props> = ({ item, close, refetch }) => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [switchs] = useLazySwitchUserTypeQuery();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      user_type: "",
    },
  });
  const options = [
    "Field Operator",
    "Waste Manager",
    "Fleet Manager",
    "Service Personnel",
    "Waste Board",
  ];
  const onSubmit = async (data: any) => {
    setIsBusy(true);
    const fd = new FormData()
    fd.append('user_id', item.id)
    fd.append('account_type', data.user_type)
    await switchs(fd)
      .then((res: any) => {
        if (res.data.success) {
          toast.success(res.data.message);
          close();
          refetch();
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
      <div className="">
        <p>User Type</p>
        <div className="border border-gray-400 p-2 rounded">
          {item.account_type}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block mt-3 mb-1">Select New User Type</label>
          <Controller
            name="user_type"
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
                {options
                  .filter((where) => where !== item.account_type)
                  .map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>
        <div className="mt-8">
          <Button
            title={isBusy ? <PulseSpinner size={13} color="white" /> : "Switch"}
            disabled={!isValid}
          />
        </div>
      </form>
    </>
  );
};

export default SwitchAccount;
