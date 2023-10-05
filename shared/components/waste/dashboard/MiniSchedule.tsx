import React from "react";
import { useWasteGetScheduleQuery } from "@/services/api/scheduleSlice";
import { ScheduleHomeResisdenceData } from "@/shared/utils/types/schedule";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import { LuExpand } from "react-icons/lu";
import { statusBall } from "@/shared/utils/format";

const MiniSchedule = () => {
  const { data, isLoading } = useWasteGetScheduleQuery();
  const imgs: string[] = [
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp2_as8d9l.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514895/pikaboo/house_green_pqjzlt.webp",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp1_dewtaf.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514642/pikaboo/samp3_q6zqu9.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp2_as8d9l.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp1_dewtaf.jpg",
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514641/pikaboo/samp4_oq4zyz.jpg",
  ];
  return (
    <>
      <div>
        <div className="border-b-2 pb-1 flex gap-x-4 items-center">
          <p className="text-xl fw-600">Recent Schedule</p>
          <Link href={"/waste/cleanups"}>
            <LuExpand className="text-xl hover:text-primary hover:scale-110 duration-100" />
          </Link>
        </div>
        <div className="mt-5 grid gap-4">
          {data &&
            data?.data?.length &&
            data?.data
              .slice(0, 6)
              .map((item: ScheduleHomeResisdenceData, i: number) => {
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
                        <p className="fw-600 text-gray-600">{item.zone.name}</p>
                        <p>
                          {dayjs(item.schedule_date).format(
                            "DD-dddd-MMMM-YYYY"
                          )}
                        </p>
                      </div>
                    </div>
                    <div>
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

export default MiniSchedule;
