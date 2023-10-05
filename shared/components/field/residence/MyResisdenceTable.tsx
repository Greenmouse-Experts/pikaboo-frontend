import React, { FC, useMemo } from "react";
import Table, { SelectColumnFilter } from "../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import Link from "next/link";
import { useGetMyZoneUsersQuery } from "@/services/api/routineSlice";

interface Props {
  data: any
  type?:string
}
const MyResidentTable:FC<Props> = ({data, type}) => {
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Resident's ID",
        accessor: "pikaboo_id",
        Cell: (row: any) => (
          <Link href={{
            pathname: type === "waste"? `/waste/residents/details` : `/field/residents/details`,
            query: {
              sort: row.row.original.id,
            }}} className="fw-500 text-primary">{row.value}</Link>
        ),
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Name",
        accessor: "first_name",
        Cell: (row: any) => row.value &&
          `${row.row.original.title} ${row.value} ${row.row.original.last_name}`,
      },
      {
        Header: "Phone Number",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "FO Incharge",
        accessor: "created_by_who",
        Cell: (row:any) => row.value.first_name? `${row.value.first_name} ${row.value.last_name}` : `${row.value.pikaboo_id}`,
        // Filter: SelectColumnFilter,
        // filter: "includes",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props: any) =>
          FormatStatus[props.value as keyof typeof FormatStatus],
          Filter: SelectColumnFilter,
          filter: "includes",
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => data?.data, [data]);
  return (
    <>
      {
        data && !!data.data && <div className="lg:p-4 w-full">
        <Table columns={columns} data={list} />
      </div>
      }
    </>
  );
};

export default MyResidentTable;