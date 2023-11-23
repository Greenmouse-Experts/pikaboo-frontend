import React, { useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { useGetBoardQuery, useGetUsersQuery } from "@/services/api/routineSlice";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import EmptyState from "@/shared/components/Ui/EmptyState";
import AddWasteBoardForm from "@/shared/components/admin/staff/board/AddWasteBoard";
import WasteBoardTable from "@/shared/components/admin/staff/board/WasteBoardTable";
import useAuthCheck from "@/hooks/useAuthCheck";

const MemberBoardMember: AppPage = () => {
  const [open, setOpen] = useState<number>(1);
  const {isAdmin} = useAuthCheck()
  const { data, refetch, isLoading } = useGetBoardQuery();
  const waste = data?.data
  const handleOpen = (value: number) => {
    setOpen(open === value ? value : value);
  };
  const activeStyle = {
    backgroundColor: "#009a06",
    color: "white",
    transition: "0.6s",
  };
  return (
    <>
      <div>
        <div className="h-40 bg-field flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Waste Board</p>
            <p className="fs-400 mt-2">Listing of Waste board members</p>
          </div>
        </div>
        <div className="p-5 lg:p-9 dash-shade mt-5 lg:mt-10 rounded-lg">
          <div className="border-b pb-2">
            <ul className="flex items-center gap-x-6">
              <li
                className="cursor-pointer p-2 rounded-xl px-4"
                style={open === 1 ? activeStyle : undefined}
                onClick={() => handleOpen(1)}
              >
                <div className="flex kitems-center gap-x-2">
                  <MdFormatListBulletedAdd className="text-2xl" />
                  <p className="fw-500">Waste Board  Listing</p>
                </div>
              </li>
              {isAdmin() && <li
                className="cursor-pointer  p-2 rounded-xl px-4"
                style={open === 2 ? activeStyle : undefined}
                onClick={() => handleOpen(2)}
              >
                <div className="flex kitems-center gap-x-2">
                  <BsPersonFillAdd className="text-2xl" />
                  <p className="fw-500">Add New Waste Board</p>
                </div>
              </li>}
            </ul>
          </div>
          <div className="mt-5">
            {isLoading && (
              <div className="flex justify-center py-12">
                <CircleLoader size="100" />
              </div>
            )}
            {open === 1 ? (
              <div>
                {waste && !waste.length && (
                  <EmptyState
                    imageClass="w-24 mx-auto"
                    message="No waste Operator Yet"
                  />
                )}
                {waste && !!waste.length && (
                  <WasteBoardTable data={waste} refetch={refetch} />
                )}
              </div>
            ) : (
              ""
            )}
            {open === 2 ? <AddWasteBoardForm refetch={refetch} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberBoardMember;
MemberBoardMember.Layout = "Dashboard";
