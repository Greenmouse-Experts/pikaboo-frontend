import React, { useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { MdFormatListBulletedAdd } from "react-icons/md";
import SpecialRequestTable from "@/shared/components/admin/special/SpecialReqTable";
import { useGetFlatQuery, useGetSpecialQuery } from "@/services/api/routineSlice";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import EmptyState from "@/shared/components/Ui/EmptyState";
import { formatAsNgnMoney } from "@/shared/utils/format";
import { AiFillEdit } from "react-icons/ai";
import useModal from "@/hooks/useModal";
import EditFlatRate from "@/shared/components/admin/special/EditRate";

const SpecialRequestPage: AppPage = () => {
  const { data, isLoading, refetch } = useGetSpecialQuery();
  const {data:flat, refetch:refetchFlat} = useGetFlatQuery()
  const [ selectedItem, setSeletedItem] = useState()
  const {Modal, setShowModal} = useModal()
  const openModal = (item:any) => {
    setSeletedItem(item)
    setShowModal(true)
  }
  return (
    <>
      <div>
        <div className="h-40 bg-waste bg-cover bg-center flex justify-between items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Special Requests</p>
            <p className="fs-400 mt-2">
              Special requests for pickup from residents.
            </p>
          </div>
          <div className="bg-light p-6 circle lg:mr-6" onClick={() => openModal(flat.data)}>
          <p className="fw-600 text-xl lg:text-3xl">{flat && formatAsNgnMoney(flat?.data.charges)}</p>
            <div className="flex justify-center items-center mt-2">
              <p className="fw-500">Flat Rate</p>
              <AiFillEdit className="text-primary text-xl"/>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-12 dash-shade p-4 lg:p-8 rounded-xl">
          <div className="flex items-center gap-x-2">
            <MdFormatListBulletedAdd className="text-2xl text-primary" />
            <p className="fw-500">Residents Special Requests</p>
          </div>
          <div className="mt-5">
            {isLoading && (
              <div className="flex justify-center py-12">
                <CircleLoader size="100" />
              </div>
            )}
            {data && !data?.data?.length && (
              <div className="py-12">
                <EmptyState
                  imageClass="w-24 mx-auto"
                  message="No Special Requests from residence"
                />
              </div>
            )}
            {data && !!data?.data?.length && (
              <SpecialRequestTable refetch={refetch} data={data?.data} />
            )}
          </div>
        </div>
      </div>
      <Modal title="Update Flat Rate">
        <EditFlatRate refetch={refetchFlat} close={() => setShowModal(false)} item={selectedItem}/>
      </Modal>
    </>
  );
};

export default SpecialRequestPage;
SpecialRequestPage.Layout = "Dashboard";
