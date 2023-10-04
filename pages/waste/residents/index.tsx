import React, {useState} from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import MyResidentTable from "@/shared/components/field/residence/MyResisdenceTable";
import { MdFormatListBulletedAdd } from "react-icons/md";

const WasteResidentsPage: AppPage = () => {
  return (
    <>
      <div>
        <div className="h-40 bg-waste bg-center flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Zone Residents</p>
            <p className="fs-400 lg:w-10/12 mt-2">
            Presented below is the roster of home residences that have been onboarded within your designated zone.
            </p>
          </div>
        </div>
        <div className="mt-5 lg:mt-12 dash-shade p-4 lg:p-8 rounded-xl">
         <div className="flex items-center borber-b-2 justify-between">
         <div className="flex  gap-x-2">
            <MdFormatListBulletedAdd className="text-2xl text-primary" />
            <p className="fw-500">Home Residents</p>
          </div>
         </div>
          <div className="mt-5">
            <MyResidentTable data={[]}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default WasteResidentsPage;
WasteResidentsPage.Layout = "Dashboard";
