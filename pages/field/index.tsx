import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetMyUsersQuery, useGetZonesQuery } from "@/services/api/routineSlice";
import ZoneInfoTable from "@/shared/components/field/dashboard/ZoneInfoTable";
import { AppPage } from "@/shared/components/layouts/Types";
import { saveZone } from "@/shared/redux/reducers/zoneSlice";
import { useAppDispatch, useAppSelector } from "@/shared/redux/store";
import { BsFillPinMapFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";

const FieldManagerDashboard: AppPage = () => {
  const {data: register, isLoading: loading} = useGetMyUsersQuery()
  const {data:zones, isLoading, refetch} = useGetZonesQuery()
  const dispatch = useAppDispatch()
  if(zones){dispatch(saveZone(zones.data))}
  const zoneName = useAppSelector((state) => state.user.user.zone)
  return (
    <>
      <div>
        {
          zoneName && <div className="text-2xl mb-2 fw-500 flex items-center gap-x-2">
            <FaMapPin className="text-2xl text-orange-600"/>
            {zoneName.name}
          </div>
        }
        <div className="grid lg:grid-cols-2 lg:gap-x-24">
          <div className="dash-shade p-5 rounded-br-[20px] grid grid-cols-2 items-center">
            <div className="bg-light rounded-xl">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688051678/pikaboo/residents-removebg-preview_zgvd8q.png"
                alt="house"
                width={150}
                height={150}
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-center">
              <p className="lg:text-lg fw-500">Registered Residents</p>
              <p className="text-center text-4xl mt-8 fw-600">{register?.data?.length}</p>
              <div className="mt-6">
              <Link href='/field/residents' className="btn-like">Register</Link>
              </div>
            </div>
          </div>
          <div className="dash-shade p-5 rounded-br-[20px] grid grid-cols-2 items-center">
            <div className="bg-light rounded-xl">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688051678/pikaboo/area-removebg-preview_vmn6hb.png"
                alt="house"
                width={150}
                height={150}
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-center">
              <p className="lg:text-lg fw-500">PikaBoo Zones</p>
              <p className="text-center text-4xl mt-8 fw-600">{zones?.data?.length}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mt-12 dash-shade p-4 lg:p-6">
          <div className="p-2 flex gap-x-3">
            <BsFillPinMapFill className="text-2xl text-primary"/>
            <p className="fw-500 lg:text-lg text-primary">Zone Information</p>
          </div>
          <div>
            <ZoneInfoTable zones={zones?.data}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldManagerDashboard;
FieldManagerDashboard.Layout = "Dashboard";
