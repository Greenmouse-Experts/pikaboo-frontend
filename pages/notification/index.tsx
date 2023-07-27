import React, { useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { BsThreeDotsVertical } from "react-icons/bs";
import Tabs from "@/shared/components/Ui/Tabs";
import {
  useGetNotifyQuery,
  useLazyDeleteNotifyQuery,
  useLazyReadNotifyQuery,
} from "@/services/api/routineSlice";
import { NotificationBody } from "@/shared/utils/types";
import Image from "next/image";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import useModal from "@/hooks/useModal";
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
// dayjs time format
const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const NotificationPage: AppPage = () => {
  const { data: notify, isLoading, refetch } = useGetNotifyQuery();
  const [read] = useLazyReadNotifyQuery();
  const [deleteNo] = useLazyDeleteNotifyQuery()
  const unread = notify?.data.filter((where: any) => where.status === "Unread");
  const { Modal, setShowModal } = useModal();
  const [selectedItem, setSelectedItem] = useState<NotificationBody>();
  const readNotify = async (id: number) => {
    const formData = new FormData();
    formData.append("notification_id", String(id));
    await read(formData)
      .then((res) => {
        if (!res.isSuccess) {
          toast.error("Read Notification Error");
        }
      })
      .catch(() => {});
  };
  const deleteNotify = async (id: number) => {
    await deleteNo(id)
      .then((res) => {
        if (res.isSuccess) {
          toast.error(res.data.message);
          setShowModal(false)
        }
      })
      .catch(() => {});
  };
  const openDetails = (item: NotificationBody) => {
    setShowModal(true);
    setSelectedItem(item);
    readNotify(item.id);
    refetch();
  };
  const NotifyItem = ({
    item,
    index,
  }: {
    item: NotificationBody;
    index: number;
  }) => {
    return (
      <div
        className={`bg-[#F6F7FB] rounded-xl p-2 lg:p-4 mt-4 flex justify-between items-center ${
          item.status === "Unread"
            ? "border border-l-[5px] border-green-600"
            : ""
        }`}
        key={index}
        onClick={() => openDetails(item)}
      >
        <div className="flex gap-x-3 items-center">
          <Image
            src={item.image}
            alt="image"
            width={80}
            height={80}
            className="circle w-16 h-16 border-2"
          />
          <div>
            <p>{item.body}</p>
            <p className="italic fs-300 mt-1">
              {dayjs(item.created_at).fromNow()}
            </p>
          </div>
        </div>
      </div>
    );
  };
  const ViewOne = ({ item }: { item: any }) => {
    return (
      <div className="relative">
        <div className="">
          <div className="flex gap-x-4 items-center">
          <Image
            src={item.image}
            alt="image"
            width={80}
            height={80}
            className="circle w-16 border-2"
          />
          <p className="fw-600 text-lg">{item.type}</p>
          </div>
          <div className="mt-4">
            <p>{item.body}</p>
            <p className="italic text-primary fs-300 mt-1">
              {dayjs(item.created_at).fromNow()}
            </p>
          </div>
        </div>
        <RiDeleteBinLine className="text-xl text-red-600 absolute top-0 right-0" onClick={() => deleteNotify(item.id)}/>
      </div>
    );
  };
  const tab = [
    {
      title: (
        <p className="flex items-center gap-x-4">
          All{" "}
          <span className="block grid place-content-center h-6 w-6 fw-500 bg-[#F2F2F2]">
            {notify && notify?.data.length}
          </span>
        </p>
      ),
      content: (
        <div>
          {notify &&
            !!notify?.data.length &&
            notify?.data
              .slice(0.2)
              .map((item: NotificationBody, index: number) => (
                <NotifyItem item={item} index={index} key={index} />
              ))}
        </div>
      ),
    },
    {
      title: (
        <p className="flex items-center gap-x-4">
          Unread{" "}
          <span className="block grid place-content-center h-6 w-6 fw-500 bg-[#F2F2F2]">
            {unread && unread.length}
          </span>
        </p>
      ),
      content: (
        <div>
          {unread &&
            !!unread?.length &&
            unread.map((item: NotificationBody, index: number) => (
              <NotifyItem item={item} index={index} key={index} />
            ))}
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="">
        <div className="pt-3 dash-shade lg:mt-8 lg:w-10/12 xl:w-8/12 mx-auto bg-white p-5 lg:p-8 min-h-[400px] rounded-[20px]">
          <div>
            <Tabs tabs={tab} />
          </div>
          {isLoading && (
            <div className="py-12 flex justify-center">
              <CircleLoader size="100" />
            </div>
          )}
        </div>
      </div>
      <Modal title="" noHead>
        <ViewOne item={selectedItem}/>
      </Modal>
    </>
  );
};

export default NotificationPage;
NotificationPage.Layout = "Dashboard";

