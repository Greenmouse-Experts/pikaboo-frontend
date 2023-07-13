import React, { FC,useMemo } from "react";
import Table from "../../../Ui/table";
import { UserData } from "@/shared/utils/types/auth";
import dayjs from "dayjs";
import { FormatStatus } from "@/shared/utils/format";

interface Props {
  data: UserData[]
}
const FleetManagerTable:FC<Props> = ({data}) => {
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row:any, index:number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Name",
        accessor: "first_name",
        Cell: (row:any) => ` ${row.value} ${row.row.original.last_name}`,
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        accessor: "phone",
      },
      {
        Header: "Gender",
        accessor: "gender",
        Cell: (props:any) => <p className="capitalize">{props.value}</p>
      },
      {
        Header: "Date Registered",
        accessor: "created_at",
        Cell: props => dayjs(props.value).format('DD-MMM-YYYY')
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props) => FormatStatus[props.value as keyof typeof FormatStatus],
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

export default FleetManagerTable;