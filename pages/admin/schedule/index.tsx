import React, { useEffect } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import {
  useAdmiGetScheduleQuery,
} from "@/services/api/scheduleSlice";
import EmptyState from "@/shared/components/Ui/EmptyState";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import { MdCleaningServices } from "react-icons/md";
import ScheduleCleanups from "@/shared/components/admin/schedule/ScheduleCleanups";

const WasteCleanup: AppPage = () => {
  const { data, refetch, isLoading } = useAdmiGetScheduleQuery();
  useEffect(() => {
    refetch()
  }, [])
  return (
    <>
      <div>
        <div className="mt-5">
          <p className="fw-600 lg:text-xl flex gap-x-2 items-center pb-2"><MdCleaningServices className="text-2xl text-primary fw-600"/>Scheduled Cleanup</p>
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
              <ScheduleCleanups data={data?.data} refetch={refetch} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WasteCleanup;
WasteCleanup.Layout = "Dashboard";
