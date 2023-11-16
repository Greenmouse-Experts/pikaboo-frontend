import React, { useEffect, useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import { BiExpand } from "react-icons/bi";
import { cleanup } from "@/shared/components/Ui/dummyRes";
import Paginate from "@/shared/components/Ui/Paginate";
import Button from "@/shared/components/Ui/Button";
import { MdFormatListBulletedAdd } from "react-icons/md";
import DueZoneDisposalTable from "@/shared/components/fleet/cleanups/DueZonesTable";
import useModal from "@/hooks/useModal";
import CreateCleanupModal from "@/shared/components/fleet/cleanups/CreateCleanup";
import { useGetScheduleQuery } from "@/services/api/scheduleSlice";
import { ScheduleRequest } from "@/shared/utils/types/schedule";
import { useGetZonesQuery } from "@/services/api/routineSlice";
import { ZonesList } from "@/shared/utils/types";
import Link from "next/link";
import { CircleLoader } from "@/shared/components/Ui/Loading";

const CleanupPage: AppPage = () => {
  const {data:schedule, isLoading, refetch} = useGetScheduleQuery()
  const {data:zone, isLoading:zoneLoad} = useGetZonesQuery()
    const {Modal, setShowModal} = useModal()
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [data, setData] = useState<ScheduleRequest[] | any>();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
  useEffect(() => {
    setData(schedule?.data)
  }, [schedule])
  

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
      setData(schedule?.data);
      setCurrentPage(1)
    } else {
      const filts = schedule?.data?.filter((where:ScheduleRequest) => where.status === e.target.value);
      setData(filts);
      setCurrentPage(1)
    }
  };
  const filterZone = (e: any) => {
    if (e.target.value === "all") {
      setData(schedule?.data);
      setCurrentPage(1)
    } else {
      const filts = schedule?.data?.filter(
        (where:ScheduleRequest) => where.zone.name === e.target.value
      );
      setData(filts);
      setCurrentPage(1)
    }
  };

  const formatBgColor = {
    PENDING: "bg-gray-400",
    ONGOING: "bg-orange-800",
    COMPLETED: "bg-primary",
  };
  return (
    <>
      <div>
        <div className="flex items-center gap-x-3 justify-between border-b pb-2">
          <div className="flex items-center gap-x-3">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688401712/pikaboo/recylcle_vq84h0.png"
              alt="recycle"
              width={200}
              height={200}
              className="w-8"
            />
            <p className="fw-600 lg:text-xl">Waste Disposal Routine</p>
          </div>
          <Button
            title="Add Cleanup Zone"
            altClassName="py-2 fw-600 text-primary underline"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="mt-12">
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
              {
                zone && zone.data.map((item:ZonesList) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                ))
              }
              </select>
          </div>
          {
            isLoading && <div className="flex justify-center my-12"><CircleLoader size="70" /></div>
          }
          <div className="grid grid-cols-2 gap-10 w-11/12 mx-auto">
            {data &&
              !!data.length &&
              currentPosts.map((item:any, index:number) => (
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
                      <p>Assigned Trucks:</p>
                      {/* <p className="fw-600 fs-800">{item.assigned_trucks}</p> */}
                    </div>
                    <div className="flex gap-x-2 itmes-center">
                      <p>Scheduled Date:</p>
                      <p className="fw-600 fs-800">{item.schedule_date}</p>
                    </div>
                  </div>
                  <Link className="absolute top-2 right-2" href={{ pathname: '/fleet/cleanups/zone', query: { id: item.id } }}>
                    <BiExpand className="text-3xl duration-100 cursor-pointer hover:scale-110 hover:" />
                  </Link>
                </div>
              ))}
          </div>
          <Paginate
            postsPerPage={postsPerPage}
            totalPosts={data?.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Modal title="Create a Schedule Cleanup">
        <CreateCleanupModal refetch={refetch} close={() => setShowModal(false)}/>
      </Modal>
    </>
  );
};

export default CleanupPage;
CleanupPage.Layout = "Dashboard";
