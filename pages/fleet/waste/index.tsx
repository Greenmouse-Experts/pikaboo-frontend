import React, {useState} from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { FaMapMarkedAlt, FaTruckMoving } from "react-icons/fa";
import { useGetMyUsersQuery } from "@/services/api/routineSlice";
import CreateWasteManagerForm from "@/shared/components/fleet/waste/CreateWasteManger";
import FleetWasteManagerTable from "@/shared/components/fleet/waste/WasteManagerTable";

const ManageWasteManagers: AppPage = () => {

  const [open, setOpen] = useState<number>(1);
  const {data, refetch, isLoading} = useGetMyUsersQuery()
  
    const waste = data?.data?.filter((where: any) => where.account_type === "Waste Manager")
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
            <p className="text-2xl fw-600">Waste Managers</p>
            <p className="fs-400 w-8/12 mt-2">
            Overseeing the collection, disposal, recycling, and overall management of waste materials to ensure environmental sustainability and compliance with regulatory standards.
            </p>
          </div>
        </div>
        <div className="mt-8 px-4">
          <div className="border-b">
            <ul className="flex items-center gap-x-6 text-gray-500">
              <li className="cursor-pointer p-2  px-4" style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}>
                <div className="flex items-center gap-x-2">
                  <FaMapMarkedAlt className="text-2xl" />
                  <p className="fw-500">Waste Manager List</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2  px-4" style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}>
                <div className="flex items-center gap-x-2">
                  <FaTruckMoving className="text-2xl" />
                  <p className="fw-500">Add Waste Manager</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            {
              open === 1? waste && !!waste.length && <FleetWasteManagerTable data={waste} refetch={refetch}/> : ""
            }
            {
              open === 2? <div className="p-5 lg:px-12 lg:py-12 dash-shade"><CreateWasteManagerForm refetch={refetch}/> </div>: ""
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWasteManagers;
ManageWasteManagers.Layout = "Dashboard";