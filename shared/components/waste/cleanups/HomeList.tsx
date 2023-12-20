import React, { FC, useMemo, useState } from "react";
import Table from "../../../components/Ui/table";
import { FormatStatus, formatStatus } from "@/shared/utils/format";
import dayjs from "dayjs";
import { ScheduleHomeResisdence } from "@/shared/utils/types/schedule";

interface Props {
  data: any;
  refetch: () => void;
}
const HomeListTable: FC<Props> = ({ data, refetch }) => {
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Name",
        accessor: "residence.home_residence.first_name",
        Cell: (row: any) =>
          ` ${row.value || ""} ${
            row.row.original.residence.home_residence.last_name || ""
          }`,
      },
      {
        Header: "Email",
        accessor: "residence.home_residence.email",
      },
      {
        Header: "Phone",
        accessor: "residence.home_residence.phone",
      },
      {
        Header: "Address",
        accessor: "residence.house_number",
        Cell: (row) => (
          <p>{`${row.value || ""} ${
            row.row.original.residence.street_name || ""
          } ${row.row.original.residence.town || ""}`}</p>
        ),
      },
      {
        Header: "Facility Type",
        accessor: "residence.commercial_facility",
      },
      {
        Header: "Area",
        accessor: "residence.area1",
      },
      {
        Header: "Cleaned By",
        accessor: "service_personnel",
        Cell: (props) =>
          props.value ? (
            <div>
              <p>
                {props.value.first_name} {props.value.last_name}
              </p>
              <p className="text-primary fs-500 fw-500 mt-2">{props.value.pikaboo_id}</p>
            </div>
          ) : (
            ""
          ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props) => formatStatus[props.value as keyof typeof formatStatus],
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => data, [data]);
  return (
    <>
      <div className="lg:p-4 lg:pt-10 dash-shade">
        <Table columns={columns} data={list} />
      </div>
    </>
  );
};

export default HomeListTable;
