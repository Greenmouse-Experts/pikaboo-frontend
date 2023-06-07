import Image from "next/image";
import React from "react";

const WorksSection = () => {
  return (
    <>
      <div className="section pt-0">
        <div className="box">
          <div className="bg-works rounded-[30px]">
            <p className="text-center text-2xl lg:text-4xl lg:py-20 py-10">
              How It Works
            </p>
            <div className="">
              <Image
                src="https://res.cloudinary.com/dic7regoe/image/upload/v1685763261/sinechat/Macbook_Air_2022_2_qkineg.png"
                alt="video"
                width={800}
                height={800}
                className="mx-auto lg:w-10/12"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksSection;
