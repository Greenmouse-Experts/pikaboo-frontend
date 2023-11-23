import React, { FC, useMemo, useState } from "react";
import Table from "../../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import { UserData } from "@/shared/utils/types/auth";
import dayjs from "dayjs";

interface Props {
    data: UserData[]
    refetch: () => void
}
const PersonnelTable:FC<Props> = ({data, refetch}) => {
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
        Header: "Managed By",
        accessor: "created_by_who",
        Cell: (row) => <p className="capitalize">{row.value? `${row.value.first_name} ${row.value.last_name}` : ""}</p>
      },
      {
        Header: "Zone",
        accessor: "zone.name",
      },
      {
        Header: "Truck No",
        accessor: "truck.vin",
        Cell: (props:any) => <p className="fw-600 text-primary">{props.value}</p>
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
        {/* <Modal title="" noHead>
        <ReusableModal
          title="Are you sure you want to suspend this Field operator"
          cancelTitle="No, cancel"
          actionTitle="Yes, Susupend"
          closeModal={() => setShowModal(false)}
          action={() => ChangeStatus(selectedItem)}
          isBusy={isBusy}
        />
        </Modal>
        <Unsuspend title="" noHead>
        <ReusableModal
          title="Are you sure you want to activate this Field operator"
          cancelTitle="No, cancel"
          actionTitle="Yes, Activate"
          closeModal={() => showUnsuspend(false)}
          action={() => ChangeStatus(selectedItem)}
          isBusy={isBusy}
        />
        </Unsuspend>
        <Assign title="Assign Field Operator Zone">
        <AddWasteManagerZoneForm item={selectedItem} close={() => showAssign(false)} refetch={refetch}/>
        </Assign> */}
    </>
  );
};

export default PersonnelTable;