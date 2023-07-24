import React, { useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { FaTruckPickup, FaTruckMoving } from "react-icons/fa";
import AddWasteTruckForm from "@/shared/components/waste/truck/AddWasteTruck";
import { useGetTrucksQuery } from "@/services/api/wasteSlice";
import WasteTruckTable from "@/shared/components/waste/truck/WasteTruckTable";
import EmptyState from "@/shared/components/Ui/EmptyState";
import { CircleLoader } from "@/shared/components/Ui/Loading";

const ManageWasteTrucks: AppPage = () => {
  const [open, setOpen] = useState<number>(1);
  const { data, refetch, isLoading } = useGetTrucksQuery();

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
        <div className="mt-8 px-4">
          <div className="border-b">
            <ul className="flex items-center gap-x-6 text-gray-500">
              <li
                className="cursor-pointer p-2  px-4"
                style={open === 1 ? activeStyle : undefined}
                onClick={() => handleOpen(1)}
              >
                <div className="flex items-center gap-x-2">
                  <FaTruckPickup className="text-2xl" />
                  <p className="fw-500">My Trucks</p>
                </div>
              </li>
              <li
                className="cursor-pointer  p-2  px-4"
                style={open === 2 ? activeStyle : undefined}
                onClick={() => handleOpen(2)}
              >
                <div className="flex items-center gap-x-2">
                  <FaTruckMoving className="text-2xl" />
                  <p className="fw-500">Add New Truck</p>
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
            {open === 1 ? (
              <div>
                {waste && !waste.length && (
                  <div className="py-12">
                    <EmptyState
                    imageClass="w-24 mx-auto"
                    message="No waste truck has been added to the system"
                  />
                  </div>
                )}
                {waste && !!waste.length && (
                  <WasteTruckTable data={waste} refetch={refetch} />
                )}
              </div>
            ) : (
              ""
            )}
            {open === 2 ? (
              <div className="p-5 lg:px-12 lg:py-12 dash-shade">
                <AddWasteTruckForm refetch={refetch} />{" "}
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

export default ManageWasteTrucks;
ManageWasteTrucks.Layout = "Dashboard";
