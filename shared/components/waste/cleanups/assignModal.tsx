import React, {FC, useEffect, useState} from "react";
import { useGetMyUsersQuery } from "@/services/api/routineSlice";
import { ScheduleRequest } from "@/shared/utils/types/schedule";
import Initials from "@/shared/utils/initials";
import { UserData } from "@/shared/utils/types/auth";
import Button from "../../Ui/Button";
import { useLazySubmitPersonnelQuery } from "@/services/api/scheduleSlice";
import { toast } from "react-toastify";
import { CircleLoader, PulseSpinner } from "../../Ui/Loading";
import EmptyState from "../../Ui/EmptyState";

interface Props {
  item: any
  close: () => void
  refetch: () => void
}
const WasteAssignModal:FC<Props> = ({item, close, refetch}) => {
  useEffect(() => {
    const prev = item.all_service_personnels.map((item:any) => String(item.service_personnel.id))
    setValues(prev)
  }, [])
  const { data, refetch:refetchPersonnel, isLoading } = useGetMyUsersQuery();
  const [isBusy, setIsBusy] = useState(false);
  const [submit] = useLazySubmitPersonnelQuery()
  const [values, setValues] = useState<string[]>([]);

  const handleCheckboxChange = (event:any) => {
    if (event.target.checked) {
      const newValue = event.target.value; // Replace this with the value you want to add
      setValues(prevValues => [...prevValues, newValue]);
    }else{
      values.splice(values.indexOf(event.target.value), 1);
     }
    
  };
  const onSubmit = async() => {
    setIsBusy(true)
    const formData = new FormData();
    formData.append('cleanup_request_id', item.id)
    for (let i = 0; i < values.length; i++) {
      formData.append(`service_personnel_id[]`, values[i]);
    }
    await submit(formData)
    .then((res:any) => {
      if(res.isSuccess){
        toast.success(res.data.message)
        refetch()
        close()
      }else {
        toast.error(res.error.data.message)
        setIsBusy(true)
      }
    })
    .catch((res) => {})
    setIsBusy(true)
  }
  
  return (
    <>
    {
          data && !data?.data?.length && <div className="py-6"><EmptyState imageClass="w-20 mx-auto" message="You do not have any service personnel"/></div>
        }
        {isLoading && (
          <div className="flex justify-center my-12 lg:mt-24">
            <CircleLoader size="100" />
          </div>
        )}
      <div className="grid lg:grid-cols-2 gap-6 max-h-[300px]">
        {data &&
          !!data?.data?.length &&
          data?.data?.map((item: UserData, index: number) => (
            <div className="dash-shade relative p-4" key={index}>
              <div className="flex items-center gap-x-4">
                <div className="w-[70px]">
                  <Initials
                    fname={item.first_name}
                    lname={item.last_name}
                    size={70}
                    text="23px"
                  />
                </div>
                <div>
                  <p className="fw-600 text-xl">
                    {item.first_name} {item.last_name}
                  </p>
                  <p className="">{item.phone}</p>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={item.id}
                  checked={values.includes(String(item.id))}
                  className="w-6 h-6 absolute top-5 right-3"
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
          ))}
      </div>
      {data && (
        <div className="lg:w-7/12 mx-auto mt-12">
          <Button title={isBusy ? <PulseSpinner size={13} color="white" />: "Submit Personnels"} disabled={!values.length} onClick={onSubmit} />
        </div>
      )}
    </>
  );
};

export default WasteAssignModal;
