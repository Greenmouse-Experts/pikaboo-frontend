import React, { useState, useEffect } from "react";
import { useLazyGetUserDetailQuery } from "@/services/api/routineSlice";
import { AppPage } from "@/shared/components/layouts/Types";
import { UserDetail } from "@/shared/utils/types";
import { useRouter } from "next/router";
import { CircleLoader, PulseSpinner } from "@/shared/components/Ui/Loading";
import QRCode from "qrcode.react";
import { FaSearchLocation } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import useModal from "@/hooks/useModal";
import AddLocation from "@/shared/components/field/residence/AddLocation";
import { BsHousesFill } from "react-icons/bs";
import { BiDownload, BiEdit, BiUserCircle } from "react-icons/bi";
import EditFacility from "@/shared/components/field/residence/EditFacility";
import jsPDF from "jspdf";
import { formatAsNgnMoney, formatPhoneNum, parseData } from "@/shared/utils/format";
import EditProfile from "@/shared/components/field/residence/EditProfile";
import Button from "@/shared/components/Ui/Button";
import { useLazySendLoginQuery } from "@/services/api/residenceSlice";
import { toast } from "react-toastify";
import AddBuildingImages from "@/shared/components/field/residence/AddBuildingImages";
import { AiOutlineCamera } from "react-icons/ai";
import Image from "next/image";

const FieldResidenceDetails: AppPage = () => {
  const route = useRouter();
  const id = route.query.sort;
  const [isBusy, setIsBusy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserDetail>();
  const [getDetail] = useLazyGetUserDetailQuery();
  const [send] = useLazySendLoginQuery()

  const { Modal, setShowModal } = useModal();
  const { Modal: Facility, setShowModal: ShowFacility } = useModal();
  const { Modal: Edit, setShowModal: showEdit } = useModal();
  const { Modal: ImageUpload, setShowModal: showImage } = useModal();

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
  
  const generatePDF = () => {
    const pid = user?.pikaboo_id? user.pikaboo_id : ""
    const doc = new jsPDF();
    const canvas: HTMLCanvasElement | null = document.querySelector("canvas");

    if (canvas) {
      const qrCodeDataURL = canvas.toDataURL("image/png");
      doc.addImage(qrCodeDataURL, "PNG", 30, 30, 80, 80); // Add QR code image
      doc.text(pid, 40, 120)
      doc.save("qrcode.pdf");
    }
  };
  const sendLogin = async(id:number) => {
    setIsBusy(true)
    await send(id).then((res:any) => {
      if (res?.data?.success) {
        toast.success(res.data.message);
        setIsBusy(false);
      } else setIsBusy(false);
    })
    .catch((err:any)=>{})
  }
  return (
    <>
      <div>
        {isLoading && (
          <div className="flex justify-center my-12 lg:mt-24">
            <CircleLoader size="140" />
          </div>
        )}
        {user && !isLoading && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="dash-shade p-6 relative">
              <BiDownload
                className="text-2xl cursor-pointer absolute top-4 right-4 hover:scale-105 duration-100"
                onClick={generatePDF}
              />
              <div className="w-10/12 lg:w-6/12 mx-auto" id="qrcode">
                <QRCode
                  size={136}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  value={`https://admin.mypikaboo.com/field/residents/details?sort=${user.id}`}
                />
                <p className="text-center mt-5 fw-600 text-primary">
                  {user.pikaboo_id}
                </p>
              </div>
              <div className="mt-6">
                <div className="flex gap-x-2 items-center border-b pb-1">
                  <MdMyLocation className="text-3xl text-primary" />
                  <p className="fw-600 text-xl text-primary">Location</p>
                </div>
                {user?.building_information?.latitude && (
                  <div className="grid grid-cols-2">
                    <div className="pt-3">
                      <p className="fw-500">Latitude:</p>
                      <p className="text-lg mt-2 text-primary fw-500">
                        {user?.building_information?.latitude}
                      </p>
                    </div>
                    <div className="pt-3">
                      <p className="fw-500">Longitude:</p>
                      <p className="text-lg mt-2 text-primary fw-500">
                        {user?.building_information?.longtitude}
                      </p>
                    </div>
                  </div>
                )}
                <div
                  className="flex underline fw-600 items-center gap-x-1 my-6"
                  onClick={() => setShowModal(true)}
                >
                  <p className="text-primary">Get location</p>
                  <FaSearchLocation className="text-primary" />
                </div>
              </div>
            </div>
            <div className="dash-shade p-6">
              <div className="flex items-center justify-between border-b pb-1">
                <div className="flex items-center gap-x-2">
                  <BsHousesFill className="text-primary text-2xl" />
                  <p className="fw-600 text-xl">Facility Type</p>
                </div>
                <BiEdit
                  className="text-2xl text-primary cursor-pointer"
                  onClick={() => ShowFacility(true)}
                />
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
                <div className="lg:flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">
                    MIXED RESIDENTIAL & PRODUCTION FACILITY:
                  </p>
                 <div className="flex">
                 <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                    {user.building_information.residential_facility}
                  </p>
                 </div>
                </div>
                <div className="lg:flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">PURPOSE BUILT FACILITY:</p>
                  <div className="flex">
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                    {user.building_information.commercial_facility}
                  </p>
                  </div>
                </div>
                <div className="lg:flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">COMPLETION STATUS:</p>
                  <div className="flex">
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                    {user.building_information.completion_status}
                  </p>
                  </div>
                </div>
                <div className="lg:flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">
                    FACILITY INCLUDE SEWAGE SYSTEM:
                  </p>
                  <div className="flex">
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                    {user.building_information.facility_include}
                  </p>
                  </div>
                </div>
                <div className="lg:flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">MEANS OF WATER SUPPLY:</p>
                  <div className="flex">
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                    {user.building_information.water_supply}
                  </p>
                  </div>
                </div>
                <div className="lg:flex gap-x-1 mt-3 items-center">
                  <p className="fs-500 fw-500">BUILDING OWNERSHIP:</p>
                  <div className="flex">
                  <p className="capitalize fw-500 bg-blue-100 px-2 py-1 rounded-xl">
                    {user.building_information.classification}
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dash-shade p-6 lg:col-span-2">
              <div className="lg:flex justify-between items-center border-b pb-1">
                <div className="flex gap-x-2 items-center">
                  <BiUserCircle className="text-3xl text-primary" />
                  <p className="fw-600 text-xl text-primary">
                    Personal Information
                  </p>
                </div>
                <div className="flex mt-3 lg:mt-0 items-center gap-x-3">
                  <Button altClassName="btn-like" title={isBusy ? <PulseSpinner size={13} color="white" />: "Send Login Details"} onClick={() => sendLogin(user.id)}/>
                  <BiEdit
                  className="text-2xl text-primary cursor-pointer"
                  onClick={() => showEdit(true)}
                />
                <AiOutlineCamera className="text-2xl text-primary cursor-pointer" onClick={() => showImage(true)} />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 mt-6">
                <div className="">
                  <p className="fw-500">Name:</p>
                  <p>{user?.first_name ? `${user.title} ${user.first_name} ${user.last_name}` : ""}</p>
                </div>
                <div>
                  <p className="fw-500">Phone:</p>
                  <p>
                    {user?.phone ? formatPhoneNum(user.phone) : ""},{" "}
                    {user?.phone2 ? formatPhoneNum(user.phone2) : ""}
                  </p>
                </div>
                <div className="">
                  <p className="fw-500">Email:</p>
                  <p>{user.email ? user.email : ""}</p>
                </div>
                <div>
                  <p className="fw-500">No of Residents:</p>
                  <p>{user?.building_information? `${user.building_information.no_of_residents} residents` : ""}</p>
                </div>
                <div className="">
                  <p className="fw-500">House No:</p>
                  <p>{user?.building_information?.house_number}</p>
                </div>
                <div className="">
                  <p className="fw-500">Street Name:</p>
                  <p>{user?.building_information?.street_name}</p>
                </div>
                <div>
                  <p className="fw-500">Area:</p>
                  <p>{user?.building_information?.area1}</p>
                </div>
                <div>
                  <p className="fw-500">Town:</p>
                  <p>{user?.building_information?.town_city}</p>
                </div>
                <div>
                  <p className="fw-500">Total Current Bill:</p>
                  <p>{user?.recent_bill?.current_bill && formatAsNgnMoney(user?.recent_bill?.current_bill)}</p>
                </div>
                <div className="">
                  <p className="fw-500">Current Monthly Bill:</p>
                  <p>{user?.recent_bill?.current_monthly_bill && formatAsNgnMoney(user?.recent_bill?.current_monthly_bill)}</p>
                </div>
                <div className="pb-12">
                  <p className="fw-500">Building Images:</p>
                  <div>
                    {user?.building_information?.building_image && <Image src={user?.building_information?.building_image} alt='building' width={300} height={300} className=""/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal title="Get Residence Coordinates">
        <AddLocation
          id={user?.id}
          close={() => setShowModal(false)}
          refetch={() => fetchDetails(id)}
        />
      </Modal>
      <Facility title="Edit Facility Type" wide>
        <EditFacility
          id={user?.id}
          close={() => ShowFacility(false)}
          refetch={() => fetchDetails(id)}
        />
      </Facility>
      <Edit title="Edit Personal Info" wide>
        <EditProfile
          user={user}
          close={() => showEdit(false)}
          refetch={() => fetchDetails(id)}
        />
      </Edit>
      <ImageUpload title="Add Building Image" wide>
          <AddBuildingImages id={user?.id} close={() => showImage(false)}
          refetch={() => fetchDetails(id)}/>
      </ImageUpload>
    </>
  );
};

export default FieldResidenceDetails;
FieldResidenceDetails.Layout = "Dashboard";
