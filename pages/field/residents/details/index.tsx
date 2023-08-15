import React, { useState, useEffect} from "react";
import { useLazyGetUserDetailQuery } from "@/services/api/routineSlice";
import { AppPage } from "@/shared/components/layouts/Types";
import { UserDetail } from "@/shared/utils/types";
import { useRouter } from "next/router";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import QRCode from 'qrcode.react';
import { FaSearchLocation } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import useModal from "@/hooks/useModal";
import AddLocation from "@/shared/components/field/residence/AddLocation";
import {  BsHousesFill } from "react-icons/bs";
import { BiDownload, BiEdit } from "react-icons/bi";
import EditFacility from "@/shared/components/field/residence/EditFacility";
import jsPDF from "jspdf";

const FieldResidenceDetails: AppPage = () => {
  const route = useRouter();
  const id = route.query.sort;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserDetail>();
  const [getDetail] = useLazyGetUserDetailQuery();

  const {Modal, setShowModal} = useModal()
  const {Modal:Facility, setShowModal:ShowFacility} = useModal()

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
  const doc = new jsPDF();
  const canvas: HTMLCanvasElement | null = document.querySelector('canvas');

  if (canvas) {
    const qrCodeDataURL = canvas.toDataURL('image/png');
    doc.addImage(qrCodeDataURL, 'PNG',  30, 30, 80, 80); // Add QR code image
    doc.save('qrcode.pdf');
  }
};
  return (
    <>
      <div>
        {isLoading && (
          <div className="flex justify-center my-12 lg:mt-24">
            <CircleLoader size="140" />
          </div>
        )}
        {user && !isLoading  && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="dash-shade p-6 relative">
              <BiDownload className="text-2xl cursor-pointer absolute top-4 right-4 hover:scale-105 duration-100" onClick={generatePDF}/>
              <div className="w-6/12 mx-auto dash-shade">
                <QRCode
                  size={136}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  id = 'qrcode'
                  value={`https://pikaboo.netlify.app/field/residents/details?sort=${user.id}`}
                />
              </div>
              <p className="text-center mt-5 fw-600 text-primary">
                {user.pikaboo_id}
              </p>
              <div className="mt-6">
                <div className="flex gap-x-2 items-center border-b pb-1">
                  <MdMyLocation className="text-3xl text-primary" />
                  <p className="fw-600 text-xl text-primary">Location</p>
                </div>
                <div className="flex underline fw-600 items-center gap-x-1 my-6" onClick={() => setShowModal(true)}>
                  <p className="text-primary">Get location</p>
                  <FaSearchLocation className="text-primary" />
                </div>
              </div>
            </div>
            <div className="dash-shade p-6">
                <div className="flex items-center justify-between border-b pb-1">
                  <div className="flex items-center gap-x-2">
                  <BsHousesFill className="text-primary text-2xl"/>
                  <p className="fw-600 text-xl">Facility Type</p>
                  </div>
                  <BiEdit className="text-2xl text-primary cursor-pointer" onClick={() => ShowFacility(true)}/>
                </div>
            </div>
          </div>
        )}
      </div>
      <Modal title="Get Resisdence Coordinates">
          <AddLocation id={user?.id} close={() => setShowModal(false)}/>
      </Modal>
      <Facility title="Edit Facility Type" wide>
          <EditFacility/>
      </Facility>
    </>
  );
};

export default FieldResidenceDetails;
FieldResidenceDetails.Layout = "Dashboard";
