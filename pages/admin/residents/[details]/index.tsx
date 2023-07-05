import React, { useEffect, useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";
import Button from "@/shared/components/Ui/Button";
import Link from "next/link";
import { useLazyGetUserDetailQuery } from "@/services/api/routineSlice";
import { useRouter } from "next/router";
import { UserDetail } from "@/shared/utils/types";
import { FormatStatus, formatAsNgnMoney } from "@/shared/utils/format";
import dayjs from "dayjs";
import { FaRegEdit } from "react-icons/fa";

const HomeResidentsDetails: AppPage = () => {
  const route = useRouter();
  const id = route.query.sort;
  const [user, setUser] = useState<UserDetail>();
  const [getDetail] = useLazyGetUserDetailQuery();

  useEffect(() => {
    if (id) {
      getDetail(id).then((res) => {
        if (res?.data?.success) {
          setUser(res.data.data);
        }
      });
    }
  }, [id]);

  return (
    <>
      <div className="mb-2">
        <Link
          href="/admin/residents/"
          className="flex items-center gap-x-1 fw-500 text-gray-500"
        >
          <TbArrowBackUp />
          Back
        </Link>
      </div>
      {user && (
        <div>
          <div className="grid lg:grid-cols-2 lg:gap-12">
            <div className="row-span-2 dash-shade p-8 rounded-xl">
              <div>
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688571534/pikaboo/aee977ce-f946-4451-8b9e-bba278ba5f13_uzwive.png"
                  alt="profile"
                  width={300}
                  height={300}
                  className="mx-auto w-[300px] h-[300px] rounded-xl dash-shade"
                />
              </div>
              <div className="flex gap-x-12 mt-12">
                <p className="w-4/12 fw-600">Resident Profile</p>
                <div className="w-8/12">
                  <p className="fw-500">{`${user.title} ${user.first_name} ${user.middle_name? user.middle_name : ""} ${user.last_name}`}</p>
                  <p>{user?.address}</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="border-b flex pb-2 ">
                  <p className="w-4/12 fw-500">Phone</p>
                  <div>
                    <p>{user.phone}</p>
                    <p>{user.phone2}</p>
                  </div>
                </div>
                <div className="border-b flex py-2 ">
                  <p className="w-4/12 fw-500">Email</p>
                  <div>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <Button
                    title="Flag Resident"
                    altClassName="lg:w-[200px] bg-red-500 text-white py-2 rounded-lg fw-500"
                  />
                </div>
              </div>
            </div>
            <div className="dash-shade relative p-8 rounded-xl">
              <div className="absolute top-4 right-4">
                <FaRegEdit className="text-xl text-primary"/>
              </div>
              <div className="grid lg:grid-cols-2">
                <div className="border-r p-4">
                  <p className="fw-600 border-b">Wallet Amount</p>
                  <p className="fw-600 text-3xl mt-2 text-green-600">{formatAsNgnMoney(user.wallet)}</p>
                </div>
                <div className="p-4">
                  <p className="fw-600 border-b">Monthly Bill</p>
                  <p className="fw-600 text-3xl mt-2">{formatAsNgnMoney(user?.bill?.bill_monthly)}</p>
                </div>
                <div className="border-r p-4">
                  <p className="fw-600 border-b">Bin Amount Paid</p>
                  <p className="fw-600 text-3xl mt-2 text-green-600">{formatAsNgnMoney(user.bill.waste_bin_monthly)}</p>
                </div>
                <div className="p-4">
                  <p className="fw-600 border-b">Monthly Bin</p>
                  <p className="fw-600 text-3xl mt-2">{formatAsNgnMoney(user?.bill?.waste_bin_monthly)}</p>
                </div>
              </div>
            </div>
            <div className="dash-shade p-8 rounded-xl">
              <p className="fw-600 lg:fs-700">More Information</p>
              <div className="mt-6">
                <div className="flex border-b pb-2 lg:pb-3">
                  <p className="w-4/12 fw-500">Zone:</p>
                  <p>Ugbowo Central</p>
                </div>
                <div className="flex border-b pt-3 pb-2 lg:py-4">
                  <p className="w-4/12 fw-500">Status:</p>
                  <div>
                    {FormatStatus[user.status as keyof typeof FormatStatus]}
                  </div>
                </div>
                <div className="flex border-b pt-3 pb-2 lg:py-4">
                  <p className="w-4/12 fw-500">Property Image:</p>
                  <div className="flex gap-x-4">
                    {
                      user.building_information.building_image &&
                      <Image
                      src={user.building_information.building_image}
                      alt="property"
                      width={100}
                      height={100}
                      className="w-24 rounded-lg shades"
                    />
                    }
                  </div>
                </div>
                <div className="flex border-b pb-2 pt-3 lg:py-4">
                  <p className="w-4/12 fw-500">Registered on:</p>
                  <p>{dayjs(user.created_at).format('DD - MMM - YYYY')}</p>
                </div>
                <div className="flex border-b pb-2 pt-3 lg:py-4">
                  <p className="w-4/12 fw-500">Facility Type:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeResidentsDetails;
HomeResidentsDetails.Layout = "Dashboard";
