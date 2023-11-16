import React, { useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Button from "@/shared/components/Ui/Button";
import { useLazySubmitComplaintQuery } from "@/services/api/routineSlice";
import { toast } from "react-toastify";
import { PulseSpinner } from "@/shared/components/Ui/Loading";

const ComplaintsPage: AppPage = () => {
  const [isBusy, setIsBusy] = useState(false)
  const [complaint, setComplaint] = useState("");
  const [starRate, setStarRate] = useState<number>(0);
  const [submit] = useLazySubmitComplaintQuery()
  const stars = Array(5).fill(<FaStar />);
  const handleRating = (i: number) => {
    setStarRate(i + 1);
  };
  const onSubmit = async () => {
    setIsBusy(true);
    const fd = new FormData();
    fd.append('rating', String(starRate))
    fd.append('improvement', complaint)
    await submit(fd)
    .then((res:any) => {
      if(res.isSuccess){
        toast.success(res.data.message)
        setComplaint('')
        setStarRate(0)
        setIsBusy(false);
      }else {
        Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
          toast.error(value[0]);
        });
        setIsBusy(false);
      }
    })
    .catch(() => {})
  }
  return (
    <>
      <div className="lg:w-6/12 mx-auto">
        <div className=" bg-[#fff] shadow p-5 px-10">
          <p className="text-2xl fw-600">Submit a Complaint</p>
          <div className="mt-5">
            <p className="fw-500">Complaint</p>
            <textarea
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              className="shadow w-full mt-3 h-24 p-2"
            />
          </div>
          <div className="mt-5">
            <p className="fw-500">Rating</p>
            <div className="flex gap-x-6 pb-5 mt-3 w-full overflow-x-auto">
              {stars.map((item, i) => (
                <div className="hover:scale-105 duration-100" key={i}>
                  <FaStar
                    className={`text-5xl cursor-pointer ${
                      starRate >= i + 1 ? "text-orange-300" : "text-gray-300"
                    }`}
                    onClick={() => handleRating(i)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Button title={isBusy? <PulseSpinner size={13} color="#fff" /> : "Submit"} disabled={complaint === ""} onClick={onSubmit}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintsPage;
ComplaintsPage.Layout = "Dashboard";
