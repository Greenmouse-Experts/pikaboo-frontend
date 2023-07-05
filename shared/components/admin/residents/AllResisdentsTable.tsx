import React, { useMemo } from "react";
import Table, { SelectColumnFilter } from "../../Ui/table";
import {FormatStatus, formatStatus } from "@/shared/utils/format";
import Link from "next/link";
import { useGetUsersQuery } from "@/services/api/routineSlice";

const AllResidentTable = () => {
  const {data,  isLoading} = useGetUsersQuery("Home Residence")
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Residence ID",
        accessor: "pikaboo_id",
        Cell: (row: any) => (
          <Link href={{
            pathname: `/admin/residents/details`,
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
        Cell: (row: any) =>
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
        Header: "Zone",
        accessor: "zone.name",
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

  const list = useMemo(() => data?.data?.data, [data]);
  return (
    <>
      {
        data && !!data?.data?.data?.length && <div className="lg:p-4 w-full">
        <Table columns={columns} data={list} />
      </div>
      }
    </>
  );
};

export default AllResidentTable;
