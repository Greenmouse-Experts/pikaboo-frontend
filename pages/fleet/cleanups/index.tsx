import React, { useState } from "react";
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

const CleanupPage: AppPage = () => {
    const {Modal, setShowModal} = useModal()
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [data, setData] = useState(cleanup);
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
    if (currentPage !== Math.ceil(data.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //   filter status
  const filterStatus = (e: any) => {
    if (e.target.value === "all") {
      setData(cleanup);
    } else {
      const filts = cleanup.filter((where) => where.status === e.target.value);
      setData(filts);
    }
  };
  const filterZone = (e: any) => {
    if (e.target.value === "all") {
      setData(cleanup);
    } else {
      const filts = cleanup.filter(
        (where) => where.zone_name === e.target.value
      );
      setData(filts);
    }
  };

  const formatBgColor = {
    pending: "bg-gray-400",
    ongoing: "bg-orange-800",
    completed: "bg-primary",
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
              <option value="pending">Pending</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
            <select
              className="w-3/12 border border-gray-500 py-2"
              onChange={(e) => filterZone(e)}
            >
              <option value="" disabled>
                Filter by Zone
              </option>
              <option value="all">All</option>
              <option value="New Benin">New Benin</option>
              <option value="Akpapava Station">Akpapava Station</option>
              <option value="Wasota Development">Wasota Development</option>
              <option value="Oluku Main">Oluku Main</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-10 w-11/12 mx-auto">
            {data &&
              !!data.length &&
              currentPosts.map((item, index) => (
                <div
                  className={`p-5 relative dash-shade text-white flex items-center gap-6 ${
                    formatBgColor[item.status as keyof typeof formatBgColor]
                  }`}
                  key={index}
                >
                  <div className="w-24 h-24 circle bg-white grid place-content-center text-black">
                    <p className="text-3xl fw-600">
                      {item.cleaned_house}
                      <span>/{item.total_resisdence}</span>
                    </p>
                    <p className="text-[10px] fw-500">Residence</p>
                  </div>
                  <div>
                    <p className="fw-600 text-xl">{item.zone_name}</p>
                    <div className="flex gap-x-2 itmes-center">
                      <p>Assigned Trucks:</p>
                      <p className="fw-600 fs-800">{item.assigned_trucks}</p>
                    </div>
                    <div className="flex gap-x-2 itmes-center">
                      <p>Scheduled Date:</p>
                      <p className="fw-600 fs-800">{item.scheduled_at}</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <BiExpand className="text-3xl duration-100 cursor-pointer hover:scale-110 hover:" />
                  </div>
                </div>
              ))}
          </div>
          <Paginate
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </div>
        <div className="mt-12 dash-shade p-5">
            <div className="flex gap-x-2">
            <MdFormatListBulletedAdd className="text-2xl" />
                <p className="fw-600">Due Zones for Disposal</p>
            </div>
            <div className="mt-3">
                <DueZoneDisposalTable/>
            </div>
        </div>
      </div>
      <Modal title="Set Zone for Cleanup">
        <CreateCleanupModal/>
      </Modal>
    </>
  );
};

export default CleanupPage;
CleanupPage.Layout = "Dashboard";
