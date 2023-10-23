import React, { useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import CleanupChart from "@/shared/components/fleet/dashboard/CleanupChart";
import { useGetDashboardQuery } from "@/services/api/fleetSlice";
import dayjs from "dayjs";

const FleetDashboard: AppPage = () => {
  const query = {
    year: new Date().getFullYear(),
  };
  const [param, setParam] = useState(query);
  const { data, isLoading } = useGetDashboardQuery(param);
  return (
    <>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          <div className="dash-shade p-4 flex gap-x-4 items-center">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46756_lvidiy.png"
              alt="waste"
              width={100}
              height={100}
            />
            <div className="text-center">
              <p className="fw-600 text-xl">
                {data ? data.data.waste_manager : 0}
              </p>
              <p className="fw-500 fs-500 text-gray-600">Waste Manager</p>
            </div>
          </div>
          <div className="dash-shade p-4 flex gap-x-4 items-center">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46754_rum9nv.png"
              alt="waste"
              width={100}
              height={100}
            />
            <div className="text-center">
              <p className="fw-600 text-xl">
                {data ? data.data.service_personnel : 0}
              </p>
              <p className="fw-500 fs-500 text-gray-600">Service Personnel</p>
            </div>
          </div>
          <div className="dash-shade p-4 flex  gap-x-4 items-center">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46757_t7u06l.png"
              alt="waste"
              width={100}
              height={100}
            />
            <div className="text-center">
              <p className="fw-600 text-xl">
                {data ? data.data.gabbage_trucks : 0}
              </p>
              <p className="fw-500 fs-500 text-gray-600">Gabbage Trucks</p>
            </div>
          </div>
          <div className="dash-shade p-4 flex  gap-x-4 items-center">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46758_pfi4y0.png"
              alt="waste"
              width={100}
              height={100}
            />
            <div className="text-center">
              <p className="fw-600 text-xl">
                {data ? data.data.home_residence : 0}
              </p>
              <p className="fw-500 fs-500 text-gray-600">Home Resisdence</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mt-10">
          <div className="bg-white p-4 dash-shade rounded-lg">
            <div className="flex gap-x-4 items-center">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688401712/pikaboo/recylcle_vq84h0.png"
                alt="recycle"
                width={200}
                height={200}
                className="w-12"
              />
              <p className="fw-600">RECENT DISPOSAL ZONES</p>
            </div>
            <div className="my-6">
              {data &&
                data.data.recent_schedule.length &&
                data.data.recent_schedule.map((item: any, i: number) => (
                  <div className="grid grid-cols-3 border-b pb-2" key={i}>
                    <p>{item.zone.name}</p>
                    <p>{item.zone.no_of_residence} Residents</p>
                    <p>{item.schedule_date}</p>
                  </div>
                ))}
            </div>
            <div className="flex justify-end">
              <Link href="/" className="text-primary fw-600">
                See All
              </Link>
            </div>
          </div>
          <div className="bg-white p-4 dash-shade rounded-lg">
            <div className="flex gap-x-4 items-center">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688401712/pikaboo/recylcle_vq84h0.png"
                alt="recycle"
                width={200}
                height={200}
                className="w-12 hue-rotate-90"
              />
              <p className="fw-600">DISPOSAL ZONES</p>
            </div>
            <div className="my-6">
            {data &&
                data.data.zones.length &&
                data.data.zones.map((item: any, i: number) => (
                  <div className="grid grid-cols-3 gap-x-1 border-b pb-2" key={i}>
                    <p>{item.name}</p>
                    <p>{item.status}</p>
                    <p>{dayjs(item.created_at).format('DD-MMM-YYYY')}</p>
                  </div>
                ))}
            </div>
            <div className="flex justify-end">
              <Link href="/" className="text-primary fw-600">
                See All
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 dash-shade lg:p-5">
          {data && <CleanupChart data={data.data.monthly_waste_disposals}/>}
        </div>
      </div>
    </>
  );
};

export default FleetDashboard;
FleetDashboard.Layout = "Dashboard";
