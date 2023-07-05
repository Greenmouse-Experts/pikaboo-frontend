import React, { FC, useMemo } from "react";
import Table from "../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import { Residence } from "@/shared/utils/types";
import Link from "next/link";

interface Props{
  data: Residence[] 
}
const WasteAreaResidentTable:FC<Props> = ({data}) => {
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Residence ID",
        accessor: "user.pikaboo_id",
        Cell: (props: any) => (
          <Link href='/admin/residents/details' className="fw-500 text-primary">{props.value}</Link>
        ),
      },
      {
        Header: "Address",
        accessor: "user.address",
      },
      {
        Header: "Name",
        accessor: "user.first_name",
        Cell: (row: any) =>
          `${row.row.original.user.title} ${row.value} ${row.row.original.user.last_name}`,
      },
      {
        Header: "Phone Number",
        accessor: "user.phone",
      },
      {
        Header: "Email",
        accessor: "user.email",
      },
      {
        Header: "Status",
        accessor: "user.status",
        Cell: (props: any) =>
          FormatStatus[props.value as keyof typeof FormatStatus],
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => data, [data]);
  return (
    <>
        <div className="lg:p-4">
        <Table columns={columns} data={list} />
        </div>
    </>
  );
};

export default WasteAreaResidentTable;
