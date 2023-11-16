import React, { useEffect, useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import {
  useGetWasteScheduleQuery,
  useWasteGetScheduleQuery,
} from "@/services/api/scheduleSlice";
import WasteScheduleTable from "@/shared/components/waste/cleanups/scheduleTable";
import EmptyState from "@/shared/components/Ui/EmptyState";
import { CircleLoader } from "@/shared/components/Ui/Loading";
// import Link from "next/link";
// import { BiExpand } from "react-icons/bi";
import useModal from "@/hooks/useModal";
import MySchedule from "@/shared/components/waste/cleanups/mySchedule";
import { MdCleaningServices } from "react-icons/md";

const WasteCleanup: AppPage = () => {
  const { data, refetch, isLoading } = useWasteGetScheduleQuery();
  // const { data: myZone, isLoading: myLoading } = useGetWasteScheduleQuery();
  const {Modal, setShowModal} = useModal()
  const [selectedItem, setSelectedItem] = useState<any>()

  // const openMySchedule = (item:any) => {
  //   setSelectedItem(item)
  //   setShowModal(true)
  // }
  useEffect(() => {
    refetch()
  }, [])
  const formatBgColor = {
    PENDING: "bg-gray-400",
    ONGOING: "bg-orange-800",
    COMPLETED: "bg-primary",
  };
  return (
    <>
      <div>
        <div className="mt-5">
          <p className="fw-500 lg:text-xl flex gap-x-2 items-center pb-2"><MdCleaningServices className="text-2xl text-primary"/>Pikaboo Scheduled Cleanups</p>
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
              <WasteScheduleTable data={data?.data} refetch={refetch} />
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
