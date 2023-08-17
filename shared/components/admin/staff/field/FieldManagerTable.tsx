import React, { FC, useMemo } from "react";
import Table from "../../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import { UserData } from "@/shared/utils/types/auth";
import dayjs from "dayjs";

interface Props {
    data: UserData[]
}
const FieldOperatorTable:FC<Props> = ({data}) => {
    
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row:any, index:number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Pikaboo ID",
        accessor: "pikaboo_id",
        Cell: (props:any) => <p className="fw-600 text-primary">{props.value}</p>
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
        Header: "Zone",
        accessor: "zone.name",
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

export default FieldOperatorTable;