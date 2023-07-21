"use client";

import React from "react";
import Image from "next/image";


interface Props {
  message?: string;
  imageClass: string
}

const EmptyState: React.FC<Props> = ({ message, imageClass }) => {
  return (
    <div className="w-full grid place-content-center">
      <div>
        <Image
          src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1689941389/pikaboo/garbage_empty-removebg-preview_o7ps5z.png"
          alt="empty"
          width={400}
          height={400}
          className={imageClass}
        />
        <p className="text-center mt-4 text-gray-500">{message || "No Data Available"}</p>
      </div>
    </div>
  );
};

export default EmptyState;
