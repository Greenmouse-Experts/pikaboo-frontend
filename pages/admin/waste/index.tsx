import React, {useState} from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import AddWasteManagerForm from "@/shared/components/admin/staff/waste/AddWasteManager";
import { useGetUsersQuery } from "@/services/api/routineSlice";
import WasteManagerTable from "@/shared/components/admin/staff/waste/WasteManagerTable";

const ManageWasteManagers: AppPage = () => {

  const [open, setOpen] = useState<number>(1);
  const {data, refetch, isLoading} = useGetUsersQuery("Waste Manager")

  const waste = data?.data?.data

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
        <div className="h-40 bg-waste1 flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Waste Managers</p>
            <p className="fs-400 w-8/12 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              architecto dolore voluptatum assumenda. Iste aliquam hic fuga
              perspiciatis voluptates necessitatibus ex volupta.
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
                  <p className="fw-500">Waste Managers Listing</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 rounded-xl px-4" style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}>
                <div className="flex kitems-center gap-x-2">
                  <BsPersonFillAdd className="text-2xl" />
                  <p className="fw-500">Add New Waste Manager</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            {
              open === 1? waste && !!waste.length && <WasteManagerTable data={waste}/> : ""
            }
            {
              open === 2? <AddWasteManagerForm refetch={refetch}/> : ""
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWasteManagers;
ManageWasteManagers.Layout = "Dashboard";
