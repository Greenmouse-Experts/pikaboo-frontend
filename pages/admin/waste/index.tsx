import React, { useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { FaMapMarkedAlt, FaTruckMoving } from "react-icons/fa";
import { useGetUsersQuery } from "@/services/api/routineSlice";
import AddWasteManagerForm from "@/shared/components/admin/staff/waste/AddWasteManager";
import WasteManagerTable from "@/shared/components/admin/staff/waste/WasteManagerTable";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import EmptyState from "@/shared/components/Ui/EmptyState";

const ManageWasteManagers: AppPage = () => {
  const [open, setOpen] = useState<number>(1);
  const { data, refetch, isLoading } = useGetUsersQuery("Waste Manager");

  const waste = data?.data;
  const handleOpen = (value: number) => {
    setOpen(open === value ? value : value);
  };
  const activeStyle = {
    borderBottom: "6px solid black",
    color: "black",
    fontWeight: "600",
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
        <div className="mt-8">
          <div className="border-b">
            <ul className="flex items-center gap-x-6 text-gray-500">
              <li
                className="cursor-pointer p-2  px-4"
                style={open === 1 ? activeStyle : undefined}
                onClick={() => handleOpen(1)}
              >
                <div className="flex items-center gap-x-2">
                  <FaMapMarkedAlt className="text-2xl" />
                  <p className="fw-500">Waste Manager Listing</p>
                </div>
              </li>
              <li
                className="cursor-pointer  p-2  px-4"
                style={open === 2 ? activeStyle : undefined}
                onClick={() => handleOpen(2)}
              >
                <div className="flex items-center gap-x-2">
                  <FaTruckMoving className="text-2xl" />
                  <p className="fw-500">Add Waste Manager</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white dash-shade pt-5">
            {isLoading && (
              <div className="flex justify-center py-12">
                <CircleLoader size="100" />
              </div>
            )}
            {open === 1 ? (
              <div>
                {waste && !waste.length && (
                  <EmptyState
                    imageClass="w-24 mx-auto"
                    message="No Waste Manager Yet"
                  />
                )}
                {waste && !!waste.length && (
                  <WasteManagerTable data={waste} refetch={refetch} />
                )}
              </div>
            ) : (
              ""
            )}
            {open === 2 ? (
              <div className="p-5 lg:px-12 lg:pb-12">
                <AddWasteManagerForm refetch={refetch} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWasteManagers;
ManageWasteManagers.Layout = "Dashboard";
