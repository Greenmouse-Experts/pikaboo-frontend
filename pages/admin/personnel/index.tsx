import React, {useState} from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { useGetUsersQuery } from "@/services/api/routineSlice";
import EmptyState from "@/shared/components/Ui/EmptyState";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import PersonnelTable from "@/shared/components/admin/staff/personnel/personnelTable";
import { MdFormatListBulleted } from "react-icons/md";

const ManagePersonnel: AppPage = () => {
  const {data, refetch, isLoading} = useGetUsersQuery("Service Personnel")

  const service = data?.data?.data?.filter((where:any )=> where.account_type === "Service Personnel")


  return (
    <>
      <div>
        <div className="h-40 bg-fleet bg-cover flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Service Personnel</p>
            {/* <p className="fs-400 w-8/12 mt-2">
            Our dedicated team of field managers holds the critical responsibility of efficiently and strategically assigning scheduled waste pickups to our fleet of waste truck drivers, ensuring seamless coordination and optimization of our waste collection operations
            </p> */}
          </div>
        </div>
        <div className="p-5 lg:p-9 dash-shade mt-5 lg:mt-10 rounded-lg">
          <div className="border-b pb-2">
            <div className="flex items-center gap-x-2">
                <MdFormatListBulleted className="text-2xl text-primary"/>
                <p className="fw-600 ">Service Personnel Listing</p>
            </div>
          </div>
          <div className="mt-5">
            {
              isLoading && <div className="flex justify-center py-12"><CircleLoader size="100"/></div>
            }
            {
               service && !service.length && <div className="py-6"><EmptyState imageClass="w-36 mx-auto" message="No Service Personnel Available"/></div>
            }
            {
               service && !!service.length && <PersonnelTable data={service} refetch={refetch}/>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagePersonnel;
ManagePersonnel.Layout = "Dashboard";
