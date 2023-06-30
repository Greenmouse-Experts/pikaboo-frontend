import AllResidentTable from "@/shared/components/admin/residents/AllResisdentsTable";
import { AppPage } from "@/shared/components/layouts/Types";
import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

const HomeResidents: AppPage = () => {
  return (
    <>
      <div>
        <div className="h-40 bg-waste bg-cover bg-center flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Pikaboo Home Resisdents</p>
            <p className="fs-400 w-8/12 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              architecto dolore voluptatum assumenda. Iste aliquam hic fuga
              perspiciatis voluptates necessitatibus ex volupta.
            </p>
          </div>
        </div>
        <div className="mt-5 lg:mt-12 dash-shade p-4 lg:p-8 rounded-xl">
          <div className="flex kitems-center gap-x-2">
            <MdFormatListBulletedAdd className="text-2xl text-primary" />
            <p className="fw-500">Home Residents</p>
          </div>
          <div className="mt-5">
            <AllResidentTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeResidents;
HomeResidents.Layout = "Dashboard";
