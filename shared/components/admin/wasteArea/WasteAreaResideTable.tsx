import React, { useMemo } from "react";
import { residentData } from "../../Ui/dummyRes";
// import { ResidenceInput } from "@/shared/utils/types/residence-types";
// import { Column } from "react-table";
import Table from "../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";

const WasteAreaResidentTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row:any, index:number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Residence ID",
        accessor: "residence_id",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Name",
        accessor: "firstName",
        Cell: (row:any) => `${row.row.original.name_title} ${row.value} ${row.row.original.lastName}`,
      },
      {
        Header: "Phone Number",
        accessor: "phone[0]",
      },
      {
        Header: "End Date",
        accessor: "email",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props:any) => FormatStatus[props.value as keyof typeof FormatStatus],
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => residentData, [residentData]);
  return (
    <>
        <div className="lg:p-4">
        <Table columns={columns} data={list} />
        </div>
    </>
  );
};

export default WasteAreaResidentTable;
