import React, { useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import {
  useGetWasteScheduleQuery,
  useWasteGetScheduleQuery,
} from "@/services/api/scheduleSlice";
import WasteScheduleTable from "@/shared/components/waste/cleanups/scheduleTable";
import EmptyState from "@/shared/components/Ui/EmptyState";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import Link from "next/link";
import { BiExpand } from "react-icons/bi";
import useModal from "@/hooks/useModal";
import MySchedule from "@/shared/components/waste/cleanups/mySchedule";

const WasteCleanup: AppPage = () => {
  const { data, isLoading } = useWasteGetScheduleQuery();
  const { data: myZone, isLoading: myLoading } = useGetWasteScheduleQuery();
  const {Modal, setShowModal} = useModal()
  const [selectedItem, setSelectedItem] = useState<any>()

  const openMySchedule = (item:any) => {
    setSelectedItem(item)
    setShowModal(true)
  }
  const formatBgColor = {
    PENDING: "bg-gray-400",
    ONGOING: "bg-orange-800",
    COMPLETED: "bg-primary",
  };
  return (
    <>
      <div>
        {myZone && (
         <div
         className={`p-5 w-6/12 relative dash-shade text-white flex items-center gap-6 ${
            formatBgColor[myZone.data.status as keyof typeof formatBgColor]
          }`}       >
         <div className="w-24 h-24 circle bg-white grid place-content-center text-black">
           <p className="text-3xl fw-600">
             {/* {myZone.data.completed} */}0
             <span>/{myZone.data.zone.no_of_residence}</span>
           </p>
           <p className="text-[10px] fw-500">Residence</p>
         </div>
         <div>
           <p className="fw-600 text-xl">{myZone.data.zone.name}</p>
           <div className="flex gap-x-2 itmes-center">
             <p>Assigned Trucks:</p>
             {/* <p className="fw-600 fs-800">{myZone.data.assigned_trucks}</p> */}
           </div>
           <div className="flex gap-x-2 itmes-center">
             <p>Scheduled Date:</p>
             <p className="fw-600 fs-800">{myZone.data.schedule_date}</p>
           </div>
         </div>
           <BiExpand className="text-3xl duration-100 cursor-pointer hover:scale-110 absolute top-3 right-6" onClick={() => openMySchedule(myZone.data)}/>
       </div>
        )}
        <div className="mt-5">
          <p className="fw-500 lg:text-xl">Pikaboo Scheduled Cleanups</p>
          <div className="dash-shade py-6 px-2">
            {isLoading && (
              <div className="flex justify-center py-12">
                <CircleLoader size="100" />
              </div>
            )}
            {data && !data?.data?.length && (
              <EmptyState
                imageClass="w-24 mx-auto"
                message="No scheduled cleanup available"
              />
            )}
            {data && !!data?.data?.length && (
              <WasteScheduleTable data={data?.data} />
            )}
          </div>
        </div>
      </div>
    <Modal title="Schedule Details" wide>
          <MySchedule item={selectedItem}/>  
    </Modal>
    </>
  );
};

export default WasteCleanup;
WasteCleanup.Layout = "Dashboard";
