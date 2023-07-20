import Initials from "@/shared/utils/initials";
import { ServicePersonnelData } from "@/shared/utils/types/schedule";
import React, { FC } from "react";

interface Props {
  data: ServicePersonnelData[];
}
const PersonnelList: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {data &&
          !!data.length &&
          data.map((item, index) => (
            <div className="shades py-6 p-4" key={index}>
              <div className="flex gap-x-4">
                <Initials
                  fname={item.service_personnel.first_name}
                  lname={item.service_personnel.last_name}
                  size={70}
                  text="23px"
                />
                <div>
                  <p className="fw-600 text-xl">
                    {item.service_personnel.first_name}{" "}
                    {item.service_personnel.last_name}
                  </p>
                  <p className="">{item.service_personnel.email}</p>
                  <p className="">{item.service_personnel.phone}</p>
                  <p className="fw-600 text-primary">
                    {item.service_personnel.pikaboo_id}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PersonnelList;
