import React, { useMemo } from "react";
import { residentData } from "../../Ui/dummyRes";
import Table, { SelectColumnFilter } from "../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import Link from "next/link";

const AllResidentTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Residence ID",
        accessor: "residence_id",
        Cell: (props: any) => (
          <Link href='/admin/residents/details' className="fw-500 text-primary">{props.value}</Link>
        ),
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Name",
        accessor: "firstName",
        Cell: (row: any) =>
          `${row.row.original.name_title} ${row.value} ${row.row.original.lastName}`,
      },
      {
        Header: "Phone Number",
        accessor: "phone[0]",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Zone",
        accessor: "zone",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props: any) =>
          FormatStatus[props.value as keyof typeof FormatStatus],
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => residentData, [residentData]);
  return (
    <>
      <div className="lg:p-4 w-full">
        <Table columns={columns} data={list} />
      </div>
    </>
  );
};

export default AllResidentTable;
