import React, {FC, useState} from 'react'
import { useGetMyUsersQuery } from '@/services/api/routineSlice'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useLazyAssignSpecialQuery } from '@/services/api/wasteSlice'
import { UserData } from '@/shared/utils/types/auth'
import { PulseSpinner } from '../../Ui/Loading'
import Button from '../../Ui/Button'

interface Props{
    id: string
    close: () => void
    refetch: () => void
}
const AssignSpecial:FC<Props> = ({id, close, refetch}) => {
    const {data:service, isLoading} = useGetMyUsersQuery()
    const [isBusy, setIsBusy] = useState<boolean>(false)
    const [assign] = useLazyAssignSpecialQuery()
    const {
      control,
      handleSubmit,
      reset,
      setError,
      watch,
      formState: { errors, isValid },
    } = useForm({
      mode: "onChange",
      defaultValues: {
        special_request_id: id,
        service_personnel_id: "",
      },
    });
    const onSubmit = async (data:any) => {
      setIsBusy(true);
      await assign(data)
        .then((res:any) => {
          if (res.data.success) {
            toast.success(res.data.message)
            refetch()
            close()
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
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
          <label className="block mt-3 fw-500 mb-1">Select Service Personnel</label>
          <Controller
            name="service_personnel_id"
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
              {
                service && service.data.map((item:UserData) => (
                  <option value={item.id} key={item.id}>
                    {item.first_name} {item.last_name}
                  </option>
                ))
              }
            </select>
            )}
          />
        </div>
        <div className="mt-12">
            <Button title={isBusy? <PulseSpinner size={13} color='white'/> : "Assign Personnel"} disabled={!isValid} />
          </div>
        </form>
        </div>
    </>
  )
}

export default AssignSpecial