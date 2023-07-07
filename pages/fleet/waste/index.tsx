import React, {useState} from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { FaMapMarkedAlt, FaTruckMoving } from "react-icons/fa";
import FleetWasteManagerZone from "@/shared/components/fleet/waste/WasteManagerZone";
import FleetWasteManagerTruck from "@/shared/components/fleet/waste/WasteManTruck";

const ManageWasteManagers: AppPage = () => {

  const [open, setOpen] = useState<number>(1);
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              architecto dolore voluptatum assumenda. Iste aliquam hic fuga
              perspiciatis voluptates necessitatibus ex volupta.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="border-b">
            <ul className="flex items-center gap-x-6 text-gray-500">
              <li className="cursor-pointer p-2  px-4" style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}>
                <div className="flex items-center gap-x-2">
                  <FaMapMarkedAlt className="text-2xl" />
                  <p className="fw-500">Waste Manager Zone</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2  px-4" style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}>
                <div className="flex items-center gap-x-2">
                  <FaTruckMoving className="text-2xl" />
                  <p className="fw-500">Waste Manager Truck</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            {
              open === 1?  <FleetWasteManagerZone/> : ""
            }
            {
              open === 2? <FleetWasteManagerTruck/> : ""
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWasteManagers;
ManageWasteManagers.Layout = "Dashboard";