"use client";

import React from "react";
import Image from "next/image";


interface Props {
  message?: string;
}

const EmptyState: React.FC<Props> = ({ message }) => {
  return (
    <div className="w-full grid place-content-center">
      <div>
        <Image
          src="https://res.cloudinary.com/dic7regoe/image/upload/v1686116932/sinechat/Group_30662_mukqqh.png"
          alt="empty"
          width={400}
          height={400}
          className="w-36 lg:w-7/12 mx-auto"
        />
        <p className="text-center mt-4 text-gray-500">{message || "No Data Available"}</p>
      </div>
    </div>
  );
};

export default EmptyState;
