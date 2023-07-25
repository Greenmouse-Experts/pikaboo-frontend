import React, { FC } from "react";
import Tabs from "../../Ui/Tabs";
import { FormatStatus, formatStatus } from "@/shared/utils/format";

interface Props {
  item: any;
}
const MySchedule: FC<Props> = ({ item }) => {
  const HomeResisdence = () => {
    return (
      <>
        <div className="mt-3 max-w-full max-h-[300px] overflow-auto">
        <table>
          <thead>
            <tr className="border-b bg-light">
              <th className="py-2 text-left px-4">Name</th>
              <th className="py-2 text-left px-4">Address</th>
              <th className="py-2 text-left px-4">Cleanup Status</th>
            </tr>
          </thead>
          <tbody>
            {!!item.home_residence &&
              item.home_residence.map((item: any, index: number) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{`${item.residence.home_residence.first_name} ${item.residence.home_residence.last_name}`}</td>
                  <td className="px-4 py-2">{item.residence.home_residence.address}</td>
                  <td className="px-4 py-4">
                    {formatStatus[item.status as keyof typeof formatStatus]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
      </>
    );
  };
  const tab = [
    {
      title: <p>My Resisdence</p>,
      content: <HomeResisdence/>,
    },
    {
      title: <p>Assigned Personnel</p>,
      content: <p></p>,
    },
  ];
  return (
    <>
      <div>
        <Tabs tabs={tab} />
      </div>
    </>
  );
};

export default MySchedule;
