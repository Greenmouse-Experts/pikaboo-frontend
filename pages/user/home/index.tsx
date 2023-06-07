import Button from "@/shared/components/Ui/Button";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardHome: AppPage = () => {
  return (
    <>
      <div className="text-black">
        <div>
          <p className="text-2xl lg:text-4xl lg:fw-6600">Home</p>
        </div>
        <div className="w-full mt-16 flex justify-center">
          <div>
            <p className="text-2xl lg:text-6xl">Hello, Chigozie</p>
            <div className="mt-5 flex items-center">
              <div className="flex">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686038728/sinechat/sm_5b321c99945a2_2_sls0rk.png"
                  alt="image"
                  width={100}
                  height={100}
                  className="w-12 h-12 relative z-20"
                />
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686038728/sinechat/Facebook_Messenger_logo_2020_3_s8opn5.png"
                  alt="image"
                  width={100}
                  height={100}
                  className="w-12 h-12 relative -left-4 z-10"
                />
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686038728/sinechat/telegram-1_2_vguurp.png"
                  alt="image"
                  width={100}
                  height={100}
                  className="w-12 h-12 relative -left-8 z-0"
                />
              </div>
              <div>
                <p className="italic text-xl text-gray-600">
                  3 Channels connected
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 flex justify-center">
          <div>
            <p className="text-center lg:text-xl">Recent Activity</p>
            <div className="grid lg:grid-cols-3 gap-x-5 mt-8">
              <div className="border border-[#D7DCE0] rounded-lg p-3 lg:p-5 bg-[#FAFBFF]">
                <p className="text-gray-500 fs-500">Total No Of Created Bots</p>
                <p className="text-xl">1,200</p>
              </div>
              <div className="border border-[#D7DCE0] rounded-lg p-3 lg:p-5 bg-[#FAFBFF]">
                <p className="text-gray-500 fs-500">Total No Of Active Bots</p>
                <p className="text-xl">870</p>
              </div>
              <div className="border border-[#D7DCE0] rounded-lg p-3 lg:p-5 bg-[#FAFBFF]">
                <p className="text-gray-500 fs-500">
                  Total No Of Received Messages
                </p>
                <p className="text-xl">13,876</p>
              </div>
            </div>
            <div className="lg:w-6/12 mt-10 mx-auto">
                <Button title="Build A Chatbot" capitalizeTitle altClassName="py-1 bg-primary text-white w-full rounded-lg py-2"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
DashboardHome.Layout = "Dashboard";
