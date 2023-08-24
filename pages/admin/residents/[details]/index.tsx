import React, { useEffect, useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";
import Button from "@/shared/components/Ui/Button";
import Link from "next/link";
import { useLazyGetUserDetailQuery } from "@/services/api/routineSlice";
import { useRouter } from "next/router";
import { UserDetail } from "@/shared/utils/types";
import { FormatStatus, formatAsNgnMoney, parseData } from "@/shared/utils/format";
import dayjs from "dayjs";
import { FaExpand, FaRegEdit } from "react-icons/fa";
import QRCode from "qrcode.react";
import useModal from "@/hooks/useModal";
import { useLazyFlagResidenceQuery } from "@/services/api/residenceSlice";
import { toast } from "react-toastify";
import ReusableModal from "@/shared/components/helpers/ReusableModal";
import SetMonthBillModal from "@/shared/components/admin/residents/SetMonthBill";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import { BsHousesFill } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import jsPDF from "jspdf";

const HomeResidentsDetails: AppPage = () => {
  const route = useRouter();
  const id = route.query.sort;
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<UserDetail>();
  const [getDetail] = useLazyGetUserDetailQuery();
  const dataRows = user?.building_information?.facility_type?.split(",");
  const flatRows = user?.building_information?.flats?.split(",");
  const shopRows = user?.building_information?.shop_store_in?.split(",");


  const fetchDetails = async (id: any) => {
    setIsLoading(true)
    await getDetail(id).then((res) => {
      if (res?.data?.success) {
        setUser(res.data.data);
        setIsLoading(false)
      }else setIsLoading(false)
    });
  };
  useEffect(() => {
    if (id) {
      fetchDetails(id);
    }//eslint-disable-next-line
  }, [id]);

  // bill updates
  const { Modal: Bill, setShowModal: setShowBill } = useModal();

  // flag resident
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const { Modal: Flag, setShowModal: setShowFlag } = useModal();
  const { Modal: Unflag, setShowModal: setShowUnflag } = useModal();
  const [flag] = useLazyFlagResidenceQuery();
  const flagResidence = async (id: any) => {
    setIsBusy(true);
    await flag(id)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          fetchDetails(id);
          setShowFlag(false);
          setShowUnflag(false);
          setIsBusy(false);
        }
        Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
          toast.error(value[0]);
        });
      })
      .catch(() => {});
  };

  // show image
  const { Modal: ImageModal, setShowModal: setShowImageModal } = useModal();
  const generatePDF = () => {
    const doc = new jsPDF();
    const canvas: HTMLCanvasElement | null = document.querySelector("canvas");

    if (canvas) {
      const qrCodeDataURL = canvas.toDataURL("image/png");
      doc.addImage(qrCodeDataURL, "PNG", 30, 30, 80, 80); // Add QR code image
      doc.save("qrcode.pdf");
    }
  };

  return (
    <>
      <div>
        <div className="mb-2">
          <Link
            href="/admin/residents/"
            className="flex items-center gap-x-1 fw-500 text-gray-500"
          >
            <TbArrowBackUp />
            Back
          </Link>
        </div>
        {isLoading && <div className="flex justify-center my-12 lg:mt-24"><CircleLoader size="140" /></div>}
        {user && (
          <div>
            <div className="grid lg:grid-cols-2 lg:gap-12">
              <div className="row-span-2 relative dash-shade p-8 rounded-xl">
              <div className="">
              <BiDownload
                className="text-2xl cursor-pointer absolute top-4 right-4 hover:scale-105 duration-100"
                onClick={generatePDF}
              />
              <div className="w-6/12 mx-auto dash-shade">
                <QRCode
                  size={136}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  id="qrcode"
                  value={`https://pikaboo.netlify.app/field/residents/details?sort=${user.id}`}
                />
              </div>
              <p className="text-center mt-5 fw-600 text-primary">
                {user.pikaboo_id}
              </p>
            </div>
                <div className="flex gap-x-12 mt-12">
                  <p className="w-4/12 fw-600 whitespace-nowrap">Resident Profile</p>
                  <div className="w-8/12">
                    {user?.first_name && <p className="fw-500">{`${user.title} ${user.first_name} ${
                      user.middle_name ? user.middle_name : ""
                    } ${user.last_name}`}</p>}
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
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Email</p>
                    <div>
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">No of Residents:</p>
                    <div>
                      {/* <p>{user.email}</p> */}
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">House No:</p>
                    <div>
                      {/* <p>{user.email}</p> */}
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">street Name:</p>
                    <div>
                      {/* <p>{user.email}</p> */}
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Area:</p>
                    <div>
                      {/* <p>{user.email}</p> */}
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Town:</p>
                    <div>
                      {/* <p>{user.email}</p> */}
                    </div>
                  </div>
                  {/* <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Building Purpose</p>
                    <div>
                      <p>{user.building_information.purpose_built_facility}</p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Facility Type</p>
                    <div>
                      {!dataRows && <p>None</p>}
                      <p>{dataRows && dataRows.map((item,index) => <p key={index}>{item}</p>)}</p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Flats</p>
                    <div>
                      {!flatRows && <p>None</p>}
                      <p>{flatRows && flatRows.map((item, index) => <p key={index}>{item}</p>)}</p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Shops</p>
                    <div>
                      {!shopRows && <p>None</p>}
                      <p>{shopRows && shopRows.map((item, index) => <p key={index}>{item}</p>)}</p>
                    </div>
                  </div> */}
                  <div className="mt-8 flex justify-center">
                    {user.status === "Flag" && (
                      <Button
                        title="Unflag Resident"
                        altClassName="lg:w-[200px] bg-primary text-white py-2 rounded-lg fw-500"
                        onClick={() => setShowUnflag(true)}
                      />
                    )}
                    {user.status === "Active" && (
                      <Button
                        title="Flag Resident"
                        altClassName="lg:w-[200px] bg-red-500 text-white py-2 rounded-lg fw-500"
                        onClick={() => setShowFlag(true)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="dash-shade relative p-8 rounded-xl">
                <div className="absolute top-4 right-4">
                  <FaRegEdit
                    className="text-xl text-primary"
                    onClick={() => setShowBill(true)}
                  />
                </div>
                <div className="grid lg:grid-cols-2">
                  <div className="border-r p-4">
                    <p className="fw-600 border-b">Wallet Amount</p>
                    <p className="fw-600 text-3xl mt-2 text-green-600">
                      {formatAsNgnMoney(user.wallet)}
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="fw-600 border-b">Monthly Bill</p>
                    <p className="fw-600 text-3xl mt-2">
                      {formatAsNgnMoney(user?.bill?.bill_monthly)}
                    </p>
                  </div>
                  <div className="border-r p-4">
                    <p className="fw-600 border-b">Bin Amount Paid</p>
                    <p className="fw-600 text-3xl mt-2 text-green-600">
                      {formatAsNgnMoney(user.bill.bin_amount_paid)}
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="fw-600 border-b">Monthly Bin</p>
                    <p className="fw-600 text-3xl mt-2">
                      {formatAsNgnMoney(user?.bill?.waste_bin_monthly)}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="dash-shade p-8 rounded-xl">
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
                      {user.building_information.building_image && (
                        <Image
                          src={user.building_information.building_image}
                          alt="property"
                          width={100}
                          height={100}
                          className="w-24 rounded-lg shades"
                          onClick={() => setShowImageModal(true)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex border-b pb-2 pt-3 lg:py-4">
                    <p className="w-4/12 fw-500">Registered on:</p>
                    <p>{dayjs(user.created_at).format("DD - MMM - YYYY")}</p>
                  </div>
                  <div className="border-b pb-2 pt-3 lg:py-4">
                    <p className="fw-600">Precise Address</p>
                    <div className="grid grid-cols-2 mt-3 gap-3">
                      <div className="">
                        <p className="fw-500 text-gray-500 border-b">Plot No</p>
                        <p>{user.building_information.plot_no}</p>
                      </div>
                      <div className="border-l pl-2">
                        <p className="fw-500 text-gray-500 border-b">
                          House No
                        </p>
                        <p>{user.building_information.house_number}</p>
                      </div>
                      <div className="">
                        <p className="fw-500 text-gray-500 border-b">
                          Street Name
                        </p>
                        <p>{user.building_information.street_name}</p>
                      </div>
                      <div className="border-l pl-2">
                        <p className="fw-500 text-gray-500 border-b">Area 1</p>
                        <p>{user.building_information.area1}</p>
                      </div>
                      <div className="">
                        <p className="fw-500 text-gray-500 border-b">Area 2</p>
                        <p>{user.building_information.area2}</p>
                      </div>
                      <div className="border-l pl-2">
                        <p className="fw-500 text-gray-500 border-b">Quarter</p>
                        <p>{user.building_information.quarter}</p>
                      </div>
                      <div className="">
                        <p className="fw-500 text-gray-500 border-b">Town</p>
                        <p>{user.building_information.town}</p>
                      </div>
                      <div className="border-l pl-2">
                        <p className="fw-500 text-gray-500 border-b">State</p>
                        <p>{user.building_information.state}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="dash-shade p-6">
              <div className="flex items-center justify-between border-b pb-1">
                <div className="flex items-center gap-x-2">
                  <BsHousesFill className="text-primary text-2xl" />
                  <p className="fw-600 text-xl">Facility Type</p>
                </div>
                {/* <BiEdit
                  className="text-2xl text-primary cursor-pointer"
                  onClick={() => ShowFacility(true)}
                /> */}
              </div>
              <div className="mt-4">
                {user.building_information.residential && (
                  <div>
                    <p className="fw-500">Residential:</p>
                    <div className="grid gap-2 lg:grid-cols-2">
                      {parseData(user.building_information.residential).map(
                        (item: any, i: number) => (
                          <div
                            className="flex bg-blue-100 p-2  fs-500 rounded-lg gap-x-2 items-center"
                            key={i}
                          >
                            <span className="fw-600 text-lg bg-white w-8 h-8 circle place-center">
                              {item.no}
                            </span>
                            <p className="fs-500 fw-500">{item.name}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
                <div>
                {user.building_information.shop_stores && (
                  <div className="mt-4">
                    <p className="fw-500">Shop/Stores In:</p>
                    <div className="grid gap-2 lg:grid-cols-2">
                      {parseData(user.building_information.shop_stores).map(
                        (item: any, i: number) => (
                          <div
                            className="flex bg-blue-100 p-2  fs-500 rounded-lg gap-x-2 items-center"
                            key={i}
                          >
                            <span className="fw-600 text-lg bg-white w-8 h-8 circle place-center">
                              {item.no}
                            </span>
                            <p className="fs-500 fw-500">{item.name}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
                </div>
                <div className="flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">MIXED RESIDENTIAL & PRODUCTION FACILITY:</p>
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">{user.building_information.residential_facility}</p>
                </div>
                <div className="flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">PURPOSE BUILT FACILITY:</p>
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">{user.building_information.residential_facility}</p>
                </div>
                <div className="flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">COMPLETION STATUS:</p>
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">{user.building_information.completion_status}</p>
                </div>
                <div className="flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">FACILITY INCLUDE SEWAGE SYSTEM:</p>
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">{user.building_information.facility_include}</p>
                </div>
                <div className="flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">MEANS OF WATER SUPPLY:</p>
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">{user.building_information.water_supply}</p>
                </div>
                <div className="flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">BUILDING OWNERSHIP:</p>
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">{user.building_information.classification}</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
      <Flag title="" noHead>
        <ReusableModal
          title="Are you sure you want to flag this residence"
          cancelTitle="No, cancel"
          actionTitle="Yes, Flag"
          closeModal={() => setShowFlag(false)}
          action={() => flagResidence(user?.id)}
          isBusy={isBusy}
        />
      </Flag>
      <Unflag title="" noHead>
        <ReusableModal
          title="Are you sure you want to unflag this residence"
          cancelTitle="No, cancel"
          actionTitle="Yes, Unflag"
          closeModal={() => setShowUnflag(false)}
          action={() => flagResidence(user?.id)}
          isBusy={isBusy}
        />
      </Unflag>
      <Bill title="Update Monthly Billing">
        <SetMonthBillModal
          bill={user?.bill.bill_monthly}
          bin={user?.bill.waste_bin_monthly}
          id={user?.id}
          close={() => setShowBill(false)}
          refetch={() => fetchDetails(id)}
        />
      </Bill>
      <ImageModal title="Residence Image">
        <a
          className="block text-end mb-2"
          href={user?.building_information?.building_image}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExpand className="text-primary text-lg"/>
        </a>
        {user && (
          <Image
            src={user?.building_information?.building_image}
            alt="property"
            width={800}
            height={800}
          />
        )}
      </ImageModal>
    </>
  );
};

export default HomeResidentsDetails;
HomeResidentsDetails.Layout = "Dashboard";
