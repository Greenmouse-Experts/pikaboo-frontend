import Image from "next/image";
import React, { FC } from "react";
import EmptyState from "../../Ui/EmptyState";

interface Props {
  data: any[];
}
const UsersFeeds: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="bg-white shadow p-5">
        {!data?.length && <EmptyState imageClass="w-24 mx-auto" message="No Feedback Yet"/>}
      {data &&
        !!data?.length &&
        data.map((item: any, i: number) => (
          <div className="flex iitems-stretch gap-x-5 bg-gray-50 mb-5 shadow rounded">
            <div className="bg-white p-2 w-[160px]">
                {item.user.avatar && <Image src={item.user.avatar} alt="avatar" width={200} height={200} className="w-16 h-16 mx-auto mb-2 circle"/>}
                <p className="text-center">{item.user.first_name} {item.user.last_name}</p>
            </div>
            <div className="py-2">
                <div>
                    <p className="fw-500 text-gray-500">Feedback:</p>
                    <p>{item.improvement}</p>
                </div>
                <div className="">
                <p className="fw-500 text-gray-500">Rating:</p>
                    <p>{item.star_rating}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersFeeds;
