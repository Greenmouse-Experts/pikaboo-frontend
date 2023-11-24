import Link from "next/link";
import React, { FC, useState } from "react";
import { BiExpand } from "react-icons/bi";
import Paginate from "../../Ui/Paginate";
import { useGetZonesQuery } from "@/services/api/routineSlice";
import { ScheduleRequest } from "@/shared/utils/types/schedule";
import { ZonesList } from "@/shared/utils/types";
// dayjs time format
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

interface Props {
  data: any;
  refetch: () => void;
}
const ScheduleCleanups: FC<Props> = ({ refetch, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [datas, setDatas] = useState<ScheduleRequest[] | any>(data);
  const { data: zone } = useGetZonesQuery();
  const [postsPerPage] = useState(8);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = datas?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data?.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //   filter status
  const filterStatus = (e: any) => {
    if (e.target.value === "all") {
      setDatas(data);
      setCurrentPage(1);
    } else {
      const filts = data?.filter(
        (where: ScheduleRequest) => where.status === e.target.value
      );
      setDatas(filts);
      setCurrentPage(1);
    }
  };
  const filterZone = (e: any) => {
    if (e.target.value === "all") {
      setDatas(data);
      setCurrentPage(1);
    } else {
      const filts = data?.filter(
        (where: ScheduleRequest) => where.zone.name === e.target.value
      );
      setDatas(filts);
      setCurrentPage(1);
    }
  };

  const formatBgColor = {
    PENDING: "bg-gray-400",
    ONGOING: "bg-orange-800",
    COMPLETED: "bg-primary",
  };
  return (
    <>
      <div className="flex justify-center mb-8 gap-x-4">
        <select
          className="w-3/12 border border-gray-500 py-2"
          onChange={(e) => filterStatus(e)}
        >
          <option value="" disabled>
            Filter by Status
          </option>
          <option value="all">All</option>
          <option value="PENDING">Pending</option>
          <option value="ONGOING">Ongoing</option>
          <option value="COMPLETED">Completed</option>
        </select>
        <select
          className="w-3/12 border border-gray-500 py-2"
          onChange={(e) => filterZone(e)}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="all">All</option>
          {zone &&
            zone.data.map((item: ZonesList) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mx-auto lg:p-5">
        {datas &&
          !!datas.length &&
          currentPosts.map((item: any, index: number) => (
            <div
              className={`p-5 relative dash-shade text-white flex items-center gap-6 ${
                formatBgColor[item.status as keyof typeof formatBgColor]
              }`}
              key={index}
            >
              <div className="w-24 h-24 circle bg-white grid place-content-center text-black">
                <p className="text-3xl fw-600">
                  {item.completed}
                  <span>/{item.total}</span>
                </p>
                <p className="text-[10px] fw-500">Residence</p>
              </div>
              <div>
                <p className="fw-600 text-xl">{item.zone.name}</p>
                <div className="flex gap-x-2 itmes-center">
                  <p>Date Created:</p>
                  <p className="fw-600 fs-800">
                    {dayjs(item.created_at).format("dddd, DD MMM YYYY")}
                  </p>
                </div>
                <div className="flex gap-x-2 itmes-center">
                  <p>Scheduled Date:</p>
                  <p className="fw-600 fs-800">
                    {dayjs(item.schedule_date, "YYYY-MM-DD").format(
                      "dddd, DD MMM YYYY"
                    )}
                  </p>
                </div>
              </div>
              <Link
                className="absolute top-2 right-2"
                href={{
                  pathname: "/admin/schedule/zone",
                  query: { id: item.id },
                }}
              >
                <BiExpand className="text-3xl duration-100 cursor-pointer hover:scale-110 hover:" />
              </Link>
            </div>
          ))}
      </div>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={datas?.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default ScheduleCleanups;
