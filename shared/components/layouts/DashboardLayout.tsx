import React, { PropsWithChildren } from "react";
import SidebarLayout from "./Sections/Sidebar";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [toggled, setToggled] = React.useState(false);
  return (
    <div className="flex w-full">
      <div className="lg:w-[300px]">
        <SidebarLayout setToggled={setToggled} toggled={toggled} />
      </div>
      <div className="w-full fixed bg-white index-30 px-3 top-2">
        <div className="dash-head-shade p-3 h-[70px] rounded-lg">
          <div className="flex items-center gap-x-12">
            <div className="md:w-64 w-6/12 flex justify-between items-center">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687429795/pikaboo/Group_48061_m4vob9.png"
                alt="logo"
                width={200}
                height={100}
                className="w-32"
              />
              <HiOutlineMenu className="text-2xl cursor-pointer" />
            </div>
            <div className="flex w-4/12 md:w-full justify-end lg:justify-between items-center">
              <div className="hidden lg:flex gap-x-2 items-center">
                <p className="fs-500 fw-600">Super Admin Dashboard</p>
                <FaRegThumbsUp
                  className="text-[#ffcc33]"
                  onClick={() => setToggled(!toggled)}
                />
              </div>
              <div className="flex justify-between gap-x-4 items-center">
                <BsBellFill className="text-2xl text-primary" />
                <div className="flex items-center gap-x-1">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686662301/pikaboo/Ellipse_2_hyba6p.png"
                    alt="profile"
                    width={100}
                    height={100}
                    className="w-10 h-10 circle"
                  />
                  <p className="fw-500 fs-500 hidden lg:block">
                    Victor Chigozie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden  pt-16">
        <div className="bg-dash py-10 min-h-screen px-3 lg:px-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
