import React, { useState, useEffect } from "react";
import { useLazyGetUserDetailQuery } from "@/services/api/routineSlice";
import { AppPage } from "@/shared/components/layouts/Types";
import { UserDetail } from "@/shared/utils/types";
import { useRouter } from "next/router";
import { CircleLoader } from "@/shared/components/Ui/Loading";
import QRCode from "react-qr-code";
import { FaSearchLocation } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import useModal from "@/hooks/useModal";
import AddLocation from "@/shared/components/field/residence/AddLocation";

const FieldResidenceDetails: AppPage = () => {
  const route = useRouter();
  const id = route.query.sort;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserDetail>();
  const [getDetail] = useLazyGetUserDetailQuery();

  const {Modal, setShowModal} = useModal()

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
  return (
    <>
      <div>
        {isLoading && (
          <div className="flex justify-center my-12 lg:mt-24">
            <CircleLoader size="140" />
          </div>
        )}
        {user  && (
          <div className="grid lg:grid-cols-2">
            <div className="dash-shade p-6">
              <div className="w-7/12 mx-auto dash-shade">
                <QRCode
                  size={156}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
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
          </div>
        )}
      </div>
      <Modal title="Get Resisdence Coordinates">
          <AddLocation id={user?.id} close={() => setShowModal(false)}/>
      </Modal>
    </>
  );
};

export default FieldResidenceDetails;
FieldResidenceDetails.Layout = "Dashboard";
