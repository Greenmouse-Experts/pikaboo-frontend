import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import React from "react";

const ComplaintsPage: AppPage = () => {
  return (
    <>
      <div>
        <Image
          src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1693921616/pikaboo/complaint-removebg-preview_ntpdlh.png"
          alt="complaint"
          width={500}
          height={500}
          className="w-6/12 mx-auto"
        />
        <p className="text-2xl fw-700 text-gray-600 text-center mt-6">No complaint yet</p>
      </div>
    </>
  );
};

export default ComplaintsPage;
ComplaintsPage.Layout = "Dashboard";
