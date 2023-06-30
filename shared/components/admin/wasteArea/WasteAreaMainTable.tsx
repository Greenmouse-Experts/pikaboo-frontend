import React, { useMemo } from "react";
import Link from "next/link";
import useModal from "@/hooks/useModal";
import CreateZoneForm from "./CreateZone";
import { useGetZonesQuery } from "@/services/api/routineSlice";
import Table from "../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import dayjs from "dayjs";

const WasteAreaMainTable = () => {
  const {Modal:CreateZone, setShowModal:ShowCreateZone} = useModal()
  const {data:zones, isLoading, refetch} = useGetZonesQuery()

  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row:any, index:number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Zone ID",
        accessor: "zone_id",
        Cell: (props:any) => <p className="fw-500 text-primary">{props.value}</p>
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Coordinates",
        accessor: "phone[0]",
      },
      {
        Header: "LGA",
        accessor: "lga",
      },
      {
        Header: "Date Created",
        accessor: "created_at",
        Cell: props => dayjs(props.value).format('DD-MMM-YYYY')
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props:any) => FormatStatus[props.value as keyof typeof FormatStatus],
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => zones?.data, [zones]);
  
  return (
    <>
      <div>
        <div className="flex justify-between border-b pb-2">
        <p className="fw-600 lg:fs-700">Waste Areas (Zones)</p>
        <p className="px-4 btn-like py-1" onClick={() => ShowCreateZone(true)}>Create Zone</p>
        </div>
        <div className="mt-8">
          {zones && !!zones.data.length && (
            <div className="lg:p-4">
            <Table columns={columns} data={list} />
            </div>
          )}
        </div>
      </div>
      <CreateZone title="Create Zone">
        <CreateZoneForm close={() => ShowCreateZone(false)} refetch={refetch}/>
      </CreateZone>
    </>
  );
};

export default WasteAreaMainTable;
