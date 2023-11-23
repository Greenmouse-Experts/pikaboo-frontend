import React, { useEffect, useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { useRouter } from "next/router";
import { useLazyGetOneScheduleQuery } from "@/services/api/scheduleSlice";
import { TbArrowBackUp } from "react-icons/tb";
import { ScheduleHomeResisdenceData } from "@/shared/utils/types/schedule";
import dayjs from "dayjs";
import HomeListTable from "@/shared/components/fleet/cleanups/HomeList";
import PersonnelList from "@/shared/components/fleet/cleanups/PersonnelList";
import PersonnelRequest from "@/shared/components/fleet/cleanups/PersonnelRequest";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import { BsHouses } from "react-icons/bs";
import MapAssigning from "@/shared/components/fleet/cleanups/MapAssigning";

const ScheduleDetails: AppPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [open, setOpen] = useState<number>(1);
  const [sched, setShed] = useState<ScheduleHomeResisdenceData>();
  const [getItem] = useLazyGetOneScheduleQuery();
  const [assign, setAssign] = useState(false)

  const getDetail = (id: any) => {
    getItem(id)
      .then((res: any) => {
        if (res.isSuccess) {
          setShed(res.data.data);
        }
      })
      .catch((err) => {}); //eslint-disable-next-line
  };
  useEffect(() => {
    getDetail(id);
  }, [id]);
  const handleOpen = (value: number) => {
    setOpen(open === value ? value : value);
  };
  const activeStyle = {
    borderBottom: "6px solid black",
    color: "black",
    fontWeight: "600",
  };

  return (
    <>
      {!sched && (
        <div className="flex justify-center my-12 lg:mt-24">
          <CircleLoader size="140" />
        </div>
      )}
      {sched && (
        <div>
          <div className="p-5 flex items-center justify-between">
            <div>
              <TbArrowBackUp onClick={() => router.back()} />
              <p className="fw-600 text-2xl">{sched.zone.name}</p>
              <p className="fw-500">
                {dayjs(sched.created_at).format("DD/MMMM/YYYY")}
              </p>
            </div>
            {/* <div>
              <p className="flex gap-x-2 items-center btn-primary px-6 py-1" onClick={() => setAssign(true)}>
                <BsHouses />
                Manage Assigning
              </p>
            </div> */}
          </div>
          <div className="mt-5 px-4">
            <div className="border-b">
              <ul className="flex items-center gap-x-6 text-gray-500">
                <li
                  className="cursor-pointer p-2  px-4"
                  style={open === 1 ? activeStyle : undefined}
                  onClick={() => handleOpen(1)}
                >
                  <div className="flex items-center gap-x-2">
                    <p className="fw-500">Residence List</p>
                  </div>
                </li>
                <li
                  className="cursor-pointer  p-2  px-4"
                  style={open === 2 ? activeStyle : undefined}
                  onClick={() => handleOpen(2)}
                >
                  <div className="flex items-center gap-x-2">
                    <p className="fw-500">Assigned Personnel</p>
                  </div>
                </li>
                <li
                  className="cursor-pointer  p-2  px-4"
                  style={open === 3 ? activeStyle : undefined}
                  onClick={() => handleOpen(3)}
                >
                  <div className="flex items-center gap-x-2">
                    <p className="fw-500">Personnel Requests</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="">
              {open === 1 ? (
                <HomeListTable
                  data={sched.home_residence}
                  refetch={() => getDetail(id)}
                />
              ) : (
                ""
              )}
              {/* {open === 2 ? (
                <PersonnelList data={sched.service_personnels} />
              ) : (
                ""
              )} */}
              {/* {open === 3 ? (
                <PersonnelRequest
                  id={sched.id}
                  refetchId={() => getDetail(id)}
                />
              ) : (
                ""
              )} */}
            </div>
          </div>
        </div>
      )}
      {
          assign && <MapAssigning item={''} close={() => setAssign(false)}/>
      }
    </>
  );
};

export default ScheduleDetails;
ScheduleDetails.Layout = "Dashboard";
