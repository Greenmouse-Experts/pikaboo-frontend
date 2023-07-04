import React, { FC,useMemo } from "react";
import { UserData } from "@/shared/utils/types/auth";
import dayjs from "dayjs";
import { FormatStatus, formatStatus } from "@/shared/utils/format";
import Table from "../../Ui/table";
import { duezones } from "../../Ui/dummyRes";

interface Props {
  data: UserData[]
}
const DueZoneDisposalTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row:any, index:number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Zone ID",
        accessor: "zone_id",
        Cell: (row:any) => <p className="fw-500 text-primary">{row.value}</p>,
      },
      {
        Header: "Zone Name",
        accessor: "name",
      },
      {
        Header: "Last Sanitation",
        accessor: "last_cleanup",
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

  const list = useMemo(() => duezones, [duezones]);
  return (
    <>
        <div className="lg:p-4">
        <Table columns={columns} data={list} />
        </div>
    </>
  );
};

export default DueZoneDisposalTable;