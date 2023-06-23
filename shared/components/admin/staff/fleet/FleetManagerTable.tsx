import React, { useMemo } from "react";
import { fleetManage } from "../../../Ui/dummyRes";
import Table from "../../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";

const FleetManagerTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row:any, index:number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Name",
        accessor: "firstName",
        Cell: (row:any) => ` ${row.value} ${row.row.original.lastName}`,
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "Date Registered",
        accessor: "date",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props:any) => FormatStatus[props.value as keyof typeof FormatStatus],
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => fleetManage, [fleetManage]);
  return (
    <>
        <div className="lg:p-4">
        <Table columns={columns} data={list} />
        </div>
    </>
  );
};

export default FleetManagerTable;