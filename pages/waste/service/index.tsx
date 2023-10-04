import React, {useState} from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { FaTruckPickup, FaTruckMoving } from "react-icons/fa";
import { useGetMyUsersQuery } from "@/services/api/routineSlice";
import AddPersonnelForm from "@/shared/components/waste/service/AddPersonnel";
import ServicePersonnelTable from "@/shared/components/waste/service/serviceTable";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import EmptyState from "@/shared/components/Ui/EmptyState";

const ManageServicePesonnel: AppPage = () => {

  const [open, setOpen] = useState<number>(1);
  const {data, refetch, isLoading} = useGetMyUsersQuery()
  
    const waste = data?.data
  const handleOpen = (value:number) => {
    setOpen(open === value ? value : value);
  };
  const activeStyle = {
    borderBottom: "6px solid black",
    color: "black",
    fontWeight: "600"
  };

  return (
    <>
      <div>
        <div className="h-40 bg-waste1 flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Service Personnel</p>
            <p className="fs-400 w-8/12 mt-2">
            Efficiently establish and meticulously manage dedicated service personnel accounts, each assigned to conduct the essential task of house-to-house waste collection.
            </p>
          </div>
        </div>
        <div className="mt-8 px-4">
          <div className="border-b">
            <ul className="flex items-center gap-x-6 text-gray-500">
              <li className="cursor-pointer p-2  px-4" style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}>
                <div className="flex items-center gap-x-2">
                  <FaTruckPickup className="text-2xl" />
                  <p className="fw-500">Service Personnels</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2  px-4" style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}>
                <div className="flex items-center gap-x-2">
                  <FaTruckMoving className="text-2xl" />
                  <p className="fw-500">Add New Service Personnel</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
          {isLoading && (
              <div className="flex justify-center py-12">
                <CircleLoader size="100" />
              </div>
            )}
            {
              open === 1? <div>
                {waste && !waste.length && (
                  <div className="py-12">
                    <EmptyState
                    imageClass="w-24 mx-auto"
                    message="No registered service personnel currently"
                  />
                  </div>
                )}
                {waste && !!waste.length && <ServicePersonnelTable data={waste} refetch={refetch}/>}
              </div> : ""
            }
            {
              open === 2? <div className="p-5 lg:px-12 lg:py-12 dash-shade"><AddPersonnelForm refetch={refetch}/> </div>: ""
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageServicePesonnel;
ManageServicePesonnel.Layout = "Dashboard";