import React, { FC, useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../Ui/TextInput";
import { toast } from "react-toastify";
import Button from "../../Ui/Button";
import { PulseSpinner } from "../../Ui/Loading";
import { useLazyUpdateResisdenceInfoQuery } from "@/services/api/residenceSlice";

interface Props {
  id: any;
  close: () => void;
  refetch: () => void
}
interface LocationProps {
  latitude: number;
  longitude: number;
}
const AddLocation: FC<Props> = ({ id, close, refetch }) => {
  const [location, setLocation] = useState<LocationProps>();
  const [isBusy, setIsBusy] = useState(false);
  const [update] = useLazyUpdateResisdenceInfoQuery()
  
  useEffect(() => {
    // Check if the browser supports Geolocation API
    if ("geolocation" in navigator) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          toast.error(`Error getting location:, ${error}`);
        }
      );
    } else {
      toast.error("Geolocation not available");
    }
  }, []);
  useEffect(() => {
    reset({
      user_id: id ,
      latitude: String(location?.latitude),
      longtitude: String(location?.longitude),
    });
  }, [location]);
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      latitude: '',
      longtitude: '',
      user_id: id 
    },
  });

    const onSubmit = async (data: any) => {
      setIsBusy(true);
      await update(data)
        .then((res: any) => {
          if (res.data.success) {
            toast.success(res.data.message);
            setIsBusy(false);
            refetch()
            close()
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
              name="latitude"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please location latitude",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Latitude"
                  error={errors.latitude?.message}
                  type={InputType.number}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="longtitude"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter location longitude",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Longitude"
                  error={errors.longtitude?.message}
                  type={InputType.number}
                  {...field}
                />
              )}
            />
          </div>
          <div>
          <div className="mt-10">
            <Button
              title={
                isBusy ? <PulseSpinner size={13} color="white" /> : "Save"
              }
              disabled={!isValid}
            />
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddLocation;
