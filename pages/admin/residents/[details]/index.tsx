import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { MdFormatListBulletedAdd } from "react-icons/md";
import Image from "next/image";

const HomeResidentsDetails: AppPage = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 lg:gap-16">
        <div className="row-span-2 dash-shade p-8 rounded-xl">
          <div>
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687532316/pikaboo/davido_w1xizx.png"
              alt="profile"
              width={300}
              height={300}
              className="mx-auto w-[300px] h-[300px] rounded-xl"
            />
          </div>
          <div className="flex gap-x-12 mt-12">
            <p className="w-4/12 fw-600">Resident Profile</p>
            <div className="w-8/12">
              <p>Mr Osagbovhon Aisosa</p>
              <p>23 wasota junction, ugbowo.</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="border-b">23 oseretin close, off wasota junction, ugbowo, Benin.</p>
          </div>
        </div>
        <div className="dash-shade p-8 rounded-xl">
          <div></div>
        </div>
        <div className="dash-shade p-8 rounded-xl"></div>
      </div>
    </>
  );
};

export default HomeResidentsDetails;
HomeResidentsDetails.Layout = "Dashboard";
