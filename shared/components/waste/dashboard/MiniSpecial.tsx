import { useGetSpecialQuery } from "@/services/api/wasteSlice";
import { statusBall } from "@/shared/utils/format";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuExpand } from "react-icons/lu";

const MiniSpecial = () => {
  const { data, isLoading, refetch } = useGetSpecialQuery();
  const imgs: string[] = [
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp2_as8d9l.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp1_dewtaf.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514641/pikaboo/samp4_oq4zyz.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp2_as8d9l.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514895/pikaboo/house_green_pqjzlt.webp",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp1_dewtaf.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514642/pikaboo/samp3_q6zqu9.jpg",
  ];
  return (
    <>
      <div>
        <div className="border-b-2 pb-1 flex gap-x-4 items-center">
          <p className="text-xl fw-600">Special Request</p>
          <Link href={"/waste/special"}>
            <LuExpand className="text-xl hover:text-primary hover:scale-110 duration-100" />
          </Link>
        </div>
        <div className="mt-5 grid gap-4">
          {data &&
            data?.data?.length &&
            data?.data.slice(0, 6).map((item: any, i: number) => {
              const img = i % imgs.length;
              const setImg = imgs[img];
              return (
                <div className="p-4 border rounded-lg flex items-center justify-between">
                  <div className="flex gap-x-2">
                    <div>
                      <Image
                        src={setImg}
                        alt=""
                        width={200}
                        height={200}
                        className="w-20 h-12 rounded-[10px]"
                      />
                    </div>
                    <div>
                      <p className="fw-600 text-gray-600">
                        {item?.alt_address
                          ? item.alt_address
                          : item.home_residence.address}
                      </p>
                      <p>{item.schedule_date}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1">
                      {item.service_personnel ? (
                        <p className="text-green-600 fw-600">Assigned</p>
                      ) : (
                        <p className="text-yellow-600 fw-600">Unassigned</p>
                      )}
                    </div>
                    {statusBall[item.status as keyof typeof statusBall]}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MiniSpecial;
