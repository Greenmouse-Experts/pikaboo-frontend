import React, { FC, useState } from "react";
import {
  useGetPersonnelQuery,
  useLazyAssignDriverQuery,
} from "@/services/api/scheduleSlice";
import Button from "../../Ui/Button";
import { CircleLoader, PulseSpinner } from "../../Ui/Loading";
import { toast } from "react-toastify";
import { UserData } from "@/shared/utils/types/auth";
import Initials from "@/shared/utils/initials";
import { ServicePersonnelData } from "@/shared/utils/types/schedule";
import EmptyState from "../../Ui/EmptyState";

interface Props {
  id: number;
  refetchId: () => void
}
const PersonnelRequest: FC<Props> = ({ id, refetchId }) => {
  const { data, isLoading, refetch } = useGetPersonnelQuery(id);
  const [isBusy, setIsBusy] = useState(false);
  const [submit] = useLazyAssignDriverQuery();
  const [values, setValues] = useState<string[]>([]);

  const handleCheckboxChange = (event: any) => {
    if (event.target.checked) {
      const newValue = event.target.value; // Replace this with the value you want to add
      setValues((prevValues) => [...prevValues, newValue]);
    } else {
      values.splice(values.indexOf(event.target.value), 1);
    }
  };
  const onSubmit = async () => {
    setIsBusy(true);
    const formData = new FormData();
    formData.append('cleanup_request_id', String(id))
    for (let i = 0; i < values.length; i++) {
      formData.append(`crsp_id[]`, values[i]);
    }
    await submit(formData)
      .then((res: any) => {
        if (res.isSuccess) {
          toast.success(res.data.message);
          setIsBusy(false);
          refetch()
          refetchId()
        } else {
          toast.error(res.error.data.message);
          setIsBusy(false);
        }
      })
      .catch((res) => {});
    setIsBusy(false);
  };

  return (
    <>
      <div className="dash-shade py-4 lg:py-12 p-6">
        <div>
            {isLoading && <div className="flex justify-center my-12"><CircleLoader size="70" /></div>}
          <div className="grid lg:grid-cols-2 gap-6">
            {data &&
              !!data?.data?.length &&
              data?.data?.map((item: ServicePersonnelData, index: number) => (
                <div className="dash-shade relative p-4" key={index}>
                  <div className="flex items-center gap-x-4">
                    <div className="w-[70px]">
                      <Initials
                        fname={item.service_personnel.first_name}
                        lname={item.service_personnel.last_name}
                        size={70}
                        text="23px"
                      />
                    </div>
                    <div>
                      <p className="fw-600 text-xl">
                        {item.service_personnel.first_name}{" "}
                        {item.service_personnel.last_name}
                      </p>
                      <p className="">{item.service_personnel.phone}</p>
                    </div>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={item.id}
                      className="w-6 h-6 absolute top-5 right-3"
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
              ))}
          </div>
          {data && !!data?.data?.length && (
            <div className="lg:w-7/12 mx-auto mt-12">
              <Button
                title={
                  isBusy ? (
                    <PulseSpinner size={13} color="white" />
                  ) : (
                    "Submit Personnels"
                  )
                }
                disabled={!values.length}
                onClick={onSubmit}
              />
            </div>
          )}
        </div>
        {data && !data.data?.length && (
          <div className="mt-6">
            <EmptyState
              message="No personnel request yet"
              imageClass="lg:w-36 mx-auto"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PersonnelRequest;
