import React, { useEffect, useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { useLazyGetUserDetailQuery } from "@/services/api/routineSlice";
import { useRouter } from "next/router";
import { UserDetail } from "@/shared/utils/types";
import {
  formatAsNgnMoney,
  parseData,
} from "@/shared/utils/format";
import { FaExpand, FaRegEdit } from "react-icons/fa";
import QRCode from "qrcode.react";
import useModal from "@/hooks/useModal";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import { BsHousesFill } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import jsPDF from "jspdf";
import { RiFundsBoxLine } from "react-icons/ri";
import UpdateWallet from "@/shared/components/admin/residents/UpdateWallet";
import SetMonthBillModal from "@/shared/components/admin/residents/SetMonthBill";

const HomeResidentsDetails: AppPage = () => {
  const route = useRouter();
  const id = route.query.sort;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserDetail>();
  const [getDetail] = useLazyGetUserDetailQuery();

  const fetchDetails = async (id: any) => {
    setIsLoading(true);
    await getDetail(id).then((res) => {
      if (res?.data?.success) {
        setUser(res.data.data);
        setIsLoading(false);
      } else setIsLoading(false);
    });
  };
  useEffect(() => {
    if (id) {
      fetchDetails(id);
    } //eslint-disable-next-line
  }, [id]);

  // flag resident
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const { Modal: Wallet, setShowModal: setShowWallet } = useModal();
  const { Modal: Bill, setShowModal: setShowBill } = useModal();


  // show image
  const { Modal: ImageModal, setShowModal: setShowImageModal } = useModal();
  const generatePDF = () => {
    const pid = user?.pikaboo_id ? user.pikaboo_id : "";
    const doc = new jsPDF();
    const canvas: HTMLCanvasElement | null = document.querySelector("canvas");

    if (canvas) {
      const qrCodeDataURL = canvas.toDataURL("image/png");
      doc.addImage(qrCodeDataURL, "PNG", 30, 30, 80, 80); // Add QR code image
      doc.setFontSize(25);
      doc.text(pid, 28, 122);
      doc.save("qrcode.pdf");
    }
  };

  return (
    <>
      <div>
        <div className="mb-2">
          <Link
            href="/waste/residents/"
            className="flex items-center gap-x-1 fw-500 text-gray-500"
          >
            <TbArrowBackUp />
            Back
          </Link>
        </div>
        {isLoading && (
          <div className="flex justify-center my-12 lg:mt-24">
            <CircleLoader size="140" />
          </div>
        )}
        {user && (
          <div>
            <div className="grid lg:grid-cols-2 items-start lg:gap-12">
              <div className="relative dash-shade p-8 rounded-xl">
                <div className="">
                  <BiDownload
                    className="text-2xl cursor-pointer absolute top-4 right-4 hover:scale-105 duration-100"
                    onClick={generatePDF}
                  />
                  <div className="w-6/12 mx-auto" id="qrcode">
                    <QRCode
                      size={136}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={`https://admin.mypikaboo.com/field/residents/details?sort=${user.id}`}
                    />
                    <p className="text-center text-lg mt-5 fw-600 text-primary">
                      {user.pikaboo_id}
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-12 mt-12">
                  <p className="w-4/12 fw-600 whitespace-nowrap">
                    Resident Profile
                  </p>
                  <div className="w-8/12">
                    {user?.first_name && (
                      <p className="fw-500">{`${user.title} ${
                        user.first_name
                      } ${user.middle_name ? user.middle_name : ""} ${
                        user.last_name
                      }`}</p>
                    )}
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
                      <p>
                        {user?.building_information?.no_of_residents
                          ? user?.building_information?.no_of_residents
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">House No:</p>
                    <div>
                      <p>
                        {user?.building_information?.house_number
                          ? user?.building_information?.house_number
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">street Name:</p>
                    <div>
                      <p>
                        {user?.building_information?.street_name
                          ? user?.building_information?.street_name
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Area:</p>
                    <div>
                      <p>
                        {user?.building_information?.area1
                          ? user?.building_information?.area1
                          : ""}
                      </p>
                      <p>
                        {user?.building_information?.area2
                          ? user?.building_information?.area2
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Town:</p>
                    <div>
                      <p>
                        {user?.building_information?.town_city
                          ? user?.building_information?.town_city
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Coordinates:</p>
                    <div>
                      <p>
                        {user?.building_information?.latitude
                          ? `${user?.building_information?.latitude}, ${user?.building_information?.longtitude}`
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Number of Bins Needed:</p>
                    <div>
                      <p>
                        {user?.building_information?.waste_bin
                          ? user?.building_information?.waste_bin
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Local Total Bill:</p>
                    <div>
                      <p>
                        {user?.recent_bill?.current_bill
                          ? `${formatAsNgnMoney(user?.recent_bill?.current_bill)}`
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Local Monthly Bill:</p>
                    <div>
                      <p>
                        {user?.recent_bill?.current_monthly_bill
                          ? `${formatAsNgnMoney(user?.recent_bill?.current_monthly_bill)}`
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">FO Incharge:</p>
                    <div>
                      <p>
                        {user?.created_by_who.pikaboo_id ? (
                          <div>
                            <p>
                              {user?.created_by_who?.first_name &&
                                user?.created_by_who?.first_name}
                            </p>
                            <p className="text-primary fw-600">
                              {user?.created_by_who?.pikaboo_id}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex py-2 mt-2">
                    <p className="w-4/12 fw-500">Zone:</p>
                    <div>
                      <p>
                      {user?.zone.name
                          ? user?.zone.name
                          : ""}
                      </p>
                    </div>
                  </div>
                  {/* <div className="mt-8 flex justify-center">
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
                  </div> */}
                </div>
              </div>
              <div>
                <div className="dash-shade relative p-3 lg:p-8 rounded-xl">
                  <div className="absolute top-4 right-4">
                    <FaRegEdit
                      className="text-xl text-primary"
                      onClick={() => setShowBill(true)}
                    />
                  </div>
                  <div className="grid lg:grid-cols-2">
                    <div className="border-r p-4">
                      <div className="flex items-center gap-x-2">
                      <p className="fw-600 border-b">Wallet Amount</p>
                      <RiFundsBoxLine className="text-lg cursor-pointer" onClick={() => setShowWallet(true)}/>
                      </div>
                      <p className={`fw-600 text-3xl mt-2 ${user.wallet.includes("-")? 'text-red-600' : 'text-green-600'}`}>
                        {formatAsNgnMoney(user.wallet)}
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="fw-600 border-b">Monthly Bill</p>
                      <p className="fw-600 text-3xl mt-2">
                        {user?.bill?.bill_monthly && formatAsNgnMoney(user?.bill?.bill_monthly)}
                      </p>
                    </div>
                    <div className="border-r p-4">
                      <p className="fw-600 border-b">Bin Amount Paid</p>
                      <p className="fw-600 text-3xl mt-2 text-green-600">
                        {user?.bill?.bin_amount_paid && formatAsNgnMoney(user.bill.bin_amount_paid)}
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="fw-600 border-b">Monthly Bin</p>
                      <p className="fw-600 text-3xl mt-2">
                        {user?.bill?.waste_bin_monthly && formatAsNgnMoney(user?.bill?.waste_bin_monthly)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dash-shade p-6 mt-5 lg:mt-10">
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
                    {user?.building_information?.residential && (
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
                      {user?.building_information?.shop_stores && (
                        <div className="mt-4">
                          <p className="fw-500">Shop/Stores In:</p>
                          <div className="grid gap-2 lg:grid-cols-2">
                            {parseData(
                              user.building_information.shop_stores
                            ).map((item: any, i: number) => (
                              <div
                                className="flex bg-blue-100 p-2  fs-500 rounded-lg gap-x-2 items-center"
                                key={i}
                              >
                                <span className="fw-600 text-lg bg-white w-8 h-8 circle place-center">
                                  {item.no}
                                </span>
                                <p className="fs-500 fw-500">{item.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-x-1 mt-3 items-center">
                      <p className="fs-500 fw-500">
                        MIXED RESIDENTIAL & PRODUCTION FACILITY:
                      </p>
                      <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                        {user?.building_information?.residential_facility}
                      </p>
                    </div>
                    <div className="flex gap-x-1 mt-3 items-center">
                      <p className="fs-500 fw-500">PURPOSE BUILT FACILITY:</p>
                      <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                        {user?.building_information?.commercial_facility}
                      </p>
                    </div>
                    <div className="flex gap-x-1 mt-3 items-center">
                      <p className="fs-500 fw-500">COMPLETION STATUS:</p>
                      <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                        {user?.building_information?.completion_status}
                      </p>
                    </div>
                    <div className="flex gap-x-1 mt-3 items-center">
                      <p className="fs-500 fw-500">
                        FACILITY INCLUDE SEWAGE SYSTEM:
                      </p>
                      <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                        {user?.building_information?.facility_include}
                      </p>
                    </div>
                    <div className="flex gap-x-1 mt-3 items-center">
                      <p className="fs-500 fw-500">MEANS OF WATER SUPPLY:</p>
                      <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                        {user?.building_information?.water_supply}
                      </p>
                    </div>
                    <div className="flex gap-x-1 mt-3 items-center">
                      <p className="fs-500 fw-500">BUILDING OWNERSHIP:</p>
                      <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                        {user?.building_information?.classification}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dash-shade p-6 mt-5 lg:mt-10">
                  <div className="flex items-center gap-x-2">
                    <BsHousesFill className="text-primary text-2xl" />
                    <p className="fw-600 text-xl">More Informations</p>
                  </div>
                  <div className="mt-4">
                    {user.avatar && <div>
                      <p className="fw-500">Residence Profile Picture:</p>
                      <div className="mt-2">
                        <Image
                          src={user.avatar}
                          alt="profile"
                          width={300}
                          height={300}
                          className="w-4/12"
                        />
                      </div>
                    </div>}
                    {user?.building_information?.building_image && <div className="mt-3">
                      <p className="fw-500">Residence Building Image:</p>
                      <div className="mt-2">
                        <Image
                          src={user.building_information.building_image}
                          alt="profile"
                          width={300}
                          height={300}
                          className="w-full"
                        />
                      </div>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Wallet title="Update Wallet Amount">
          <UpdateWallet bill={user?.wallet} id={user?.id}
          close={() => setShowWallet(false)}
          refetch={() => fetchDetails(id)} type="waste"/>
      </Wallet>
      <ImageModal title="Residence Image">
        <a
          className="block text-end mb-2"
          href={user?.building_information?.building_image}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExpand className="text-primary text-lg" />
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
      <Bill title="Update Monthly Billing">
        <SetMonthBillModal
          bill={user?.bill?.bill_monthly}
          bin={user?.bill?.waste_bin_monthly}
          id={user?.id}
          close={() => setShowBill(false)}
          refetch={() => fetchDetails(id)}
          waste
        />
      </Bill>
    </>
  );
};

export default HomeResidentsDetails;
HomeResidentsDetails.Layout = "Dashboard";
