import MoneyInChart from "@/shared/components/admin/dashboard/MoneyInChart";
import SpecialRequestMiniTable from "@/shared/components/admin/dashboard/SpecialRequestMiniTable";
import WasteAreaMiniTable from "@/shared/components/admin/wasteArea/WasteAreaMiniTable";
import WasteAreaMap from "@/shared/components/admin/wasteArea/WateAreaMap";
import { AppPage } from "@/shared/components/layouts/Types";
import { useAppSelector } from "@/shared/redux/store";
import Image from "next/image";
import React from "react";

const AdminDashboard: AppPage = () => {
  const data = useAppSelector((state) => state.user.dashInfo)
  return (
    <>
      <div className="">
        <div className="grid lg:grid-cols-5 gap-y-6 gap-x-6 dash-shade p-5 py-8 rounded-lg">
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46754_rum9nv.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="text-lg fw-600">{data.totalFM}</p>
              <p className="fs-400 fw-500 text-primary">Fleet Managers</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46755_way6dw.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="text-lg fw-600">{data.totalFO}</p>
              <p className="fs-400 fw-500 text-primary">Field Operators</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46756_lvidiy.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="text-lg fw-600">{data.totalWM}</p>
              <p className="fs-400 fw-500 text-primary">Waste Managers</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46757_t7u06l.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="text-lg fw-600">{data.totalSP}</p>
              <p className="fs-400 fw-500 text-primary">Truck Drivers</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059] lg:border-none">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46758_pfi4y0.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="text-lg fw-600">{data.totalHR}</p>
              <p className="fs-400 fw-500 text-primary">House Owners</p>
            </div>
          </div>
        </div>
        <div className="grid gap-y-5 lg:grid-cols-7 gap-x-6 mt-8 lg:mt-12">
          <div className=" hidden lg:block lg:col-span-4 dash-shade bg-white p-6 rounded-lg">
              <WasteAreaMap/>
          </div>
          <div className="w-full overflow-x-auto lg:col-span-3 dash-shade bg-white p-6 rounded-lg">
            <WasteAreaMiniTable data={data.scheduleRequests}/>
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-x-6 mt-8 px-[3px] lg:mt-12">
          <div className="w-full overflow-x-auto  lg:col-span-5 dash-shade bg-white p-6 rounded-lg">
              <MoneyInChart/>
          </div>
          <div className="w-full overflow-x-auto mt-6 lg:mt-0 lg:col-span-3 dash-shade bg-white p-6 rounded-lg">
            <SpecialRequestMiniTable data={data.specialRequests}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
AdminDashboard.Layout = "Dashboard";
