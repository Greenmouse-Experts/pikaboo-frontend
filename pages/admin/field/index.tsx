import React, {useState} from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import AddFieldOperatorForm from "@/shared/components/admin/staff/field/AddFieldOperator";
import FieldOperatorTable from "@/shared/components/admin/staff/field/FieldManagerTable";
import { useGetUsersQuery } from "@/services/api/routineSlice";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import EmptyState from "@/shared/components/Ui/EmptyState";

const ManageWasteManagers: AppPage = () => {

  const [open, setOpen] = useState<number>(1);
  const {data, refetch, isLoading} = useGetUsersQuery("Field Operator")

  const field = data?.data?.data?.filter((where:any )=> where.account_type === "Field Operator")

  const handleOpen = (value:number) => {
    setOpen(open === value ? value : value);
  };
  const activeStyle = {
    backgroundColor: '#009a06',
    color: "white",
    transition: "0.6s",
  };

  return (
    <>
      <div>
        <div className="h-40 bg-field flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Field Operators</p>
            <p className="fs-400 w-8/12 mt-2">
              PikaBoo field operators incharge of effctive onboarding and registering resisdence from different zones into the the app. 
            </p>
          </div>
        </div>
        <div className="p-5 lg:p-9 dash-shade mt-5 lg:mt-10 rounded-lg">
          <div className="border-b pb-2">
            <ul className="flex items-center gap-x-6">
              <li className="cursor-pointer p-2 rounded-xl px-4" style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}>
                <div className="flex kitems-center gap-x-2">
                  <MdFormatListBulletedAdd className="text-2xl" />
                  <p className="fw-500">Field Operators Listing</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 rounded-xl px-4" style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}>
                <div className="flex kitems-center gap-x-2">
                  <BsPersonFillAdd className="text-2xl" />
                  <p className="fw-500">Add New Field Operator</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
          {isLoading && (
              <div className="flex justify-center py-12">
                <CircleLoader size="100" />
              </div>
            )}
            {
              open === 1? <div>
                {
                  field && !field.length && <EmptyState
                  imageClass="w-24 mx-auto"
                  message="No Field Operator Yet"
                />
                }
                {
                  field && !!field.length && <FieldOperatorTable data={field}/>
                }
              </div> : ""
            }
            {
              open === 2? <AddFieldOperatorForm refetch={refetch}/> : ""
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWasteManagers;
ManageWasteManagers.Layout = "Dashboard";
