import React, { useEffect, useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { useRouter } from "next/router";
import { useLazyAdminGetOneScheduleQuery} from "@/services/api/scheduleSlice";
import { TbArrowBackUp } from "react-icons/tb";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import HomeListTable from "@/shared/components/waste/cleanups/HomeList";
import dayjs from "dayjs";

const ScheduleDetails: AppPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [open, setOpen] = useState<number>(1);
  const [sched, setShed] = useState<any[]>();
  const [getItem] = useLazyAdminGetOneScheduleQuery();

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
              <p className="fw-600 text-2xl">{sched[0].zone}</p>
              <p className="fw-500">
                {dayjs(sched[0].created_at).format("DD/MMMM/YYYY")}
              </p>
            </div>
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
              </ul>
            </div>
            <div className="">
              <HomeListTable
                data={sched}
                refetch={() => getDetail(id)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScheduleDetails;
ScheduleDetails.Layout = "Dashboard";
