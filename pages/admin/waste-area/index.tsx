import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import WasteAreaMap from "@/shared/components/admin/wasteArea/WateAreaMap";
import WasteAreaMainTable from "@/shared/components/admin/wasteArea/WasteAreaMainTable";


const AdminWasteArea: AppPage = () => {
  return (
    <>
      <div className="">
        <div className="grid dash-shade p-6 rounded-lg">
        <WasteAreaMap/>
        </div>
        <div className="grid w-full overflow-x-auto dash-shade rounded-lg mt-8 lg:mt-12 p-6">
        <WasteAreaMainTable/>
        </div>
      </div>
    </>
  );
};

export default AdminWasteArea;
AdminWasteArea.Layout = "Dashboard";