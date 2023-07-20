import React, {useState} from "react";
import { useGetMyUsersQuery } from "@/services/api/routineSlice";
import { ScheduleRequest } from "@/shared/utils/types/schedule";
import Initials from "@/shared/utils/initials";
import { UserData } from "@/shared/utils/types/auth";
import Button from "../../Ui/Button";

const WasteAssignModal = () => {
  const { data, refetch, isLoading } = useGetMyUsersQuery();
  const [isChecked, setIsChecked] = useState(false);
  const [values, setValues] = useState<string[]>([]);

  const handleCheckboxChange = (event:any) => {
    setIsChecked(event.target.checked);

    if (event.target.checked) {
      // Add value to the state array when checkbox is checked
      const newValue = event.target.value; // Replace this with the value you want to add
      setValues(prevValues => [...prevValues, newValue]);
    }
  };

  console.log(values);
  
  return (
    <>
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
                  className="w-6 h-6 absolute top-5 right-3"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
          ))}
      </div>
      {data && (
        <div className="lg:w-7/12 mx-auto mt-12">
          <Button title="Submit Personnels" />
        </div>
      )}
    </>
  );
};

export default WasteAssignModal;
