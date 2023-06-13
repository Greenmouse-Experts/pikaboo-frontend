import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import React from "react";

const AdminDashboard: AppPage = () => {
  return (
    <>
      <div className="">
        <div className="grid lg:grid-cols-5 gap-x-6 dash-shade p-5 py-8 rounded-lg">
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46754_rum9nv.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="text-lg fw-600">4</p>
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
              <p className="text-lg fw-600">110</p>
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
              <p className="text-lg fw-600">10</p>
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
              <p className="text-lg fw-600">45</p>
              <p className="fs-400 fw-500 text-primary">Truck Drivers</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46758_pfi4y0.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="text-lg fw-600">189</p>
              <p className="fs-400 fw-500 text-primary">House Owners</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
AdminDashboard.Layout = "Dashboard";
