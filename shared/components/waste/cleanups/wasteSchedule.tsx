import Link from "next/link";
import React, { FC, useState } from "react";
import { BiExpand } from "react-icons/bi";
import Paginate from "../../Ui/Paginate";
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
const WasteScheduleCleanups: FC<Props> = ({ refetch, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
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

  const formatBgColor = {
    PENDING: "bg-gray-400",
    ONGOING: "bg-orange-800",
    COMPLETED: "bg-primary",
  };
  return (
    <>
      <div className="grid gap-10 w-11/12 mx-auto">
        {data &&
          !!data.length &&
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
                  pathname: "/waste/cleanups/zone",
                  query: { id: item.id },
                }}
              >
                <BiExpand className="text-3xl duration-100 cursor-pointer hover:scale-110 hover:" />
              </Link>
            </div>
          ))}
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={data?.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default WasteScheduleCleanups;
