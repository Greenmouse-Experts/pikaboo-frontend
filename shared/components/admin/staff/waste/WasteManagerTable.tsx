import React, { FC, useMemo, useState } from "react";
import Table from "../../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import { UserData } from "@/shared/utils/types/auth";
import dayjs from "dayjs";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../../Ui/dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import useModal from "@/hooks/useModal";
import AddWasteManagerZoneForm from "./AddWasteManagerZone";

interface Props {
  data: UserData[];
  refetch: () => void;
}
const WasteManagerTable: FC<Props> = ({ data, refetch }) => {
  const { Modal, setShowModal } = useModal();
  const [selectedItem, setSelectedItem] = useState<any>();
  const openModal = (item: any) => {
    setShowModal(true);
    setSelectedItem(item);
  };

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
          <p className="fw-500 text-primary">{row.value}</p>
        ),
      },
      {
        Header: "Name",
        accessor: "first_name",
        Cell: (row: any) => ` ${row.value} ${row.row.original.last_name}`,
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
        Cell: (props: any) => <p className="capitalize">{props.value}</p>,
      },
      {
        Header: "Date Registered",
        accessor: "created_at",
        Cell: (props) => dayjs(props.value).format("DD-MMM-YYYY"),
      },
      {
        Header: "Zone",
        accessor: "zone",
        Cell: (props) => (props.value ? props.value.name : "Nill"),
      },
      {
        Header: "Zone Incharge",
        accessor: "",
        // Cell: (props) => (props.value ? props.value.name : "Nill"),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props) => FormatStatus[props.value as keyof typeof FormatStatus],
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: (row) => (
          <div>
            <Menu placement="bottom-end">
              <MenuHandler>
                <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                  <BsThreeDotsVertical className="text-xl" />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => openModal(row.row.original)}>
                  Assign Zone
                </MenuItem>
                <MenuItem className="bg-red-600 text-white">Suspend</MenuItem>
              </MenuList>
            </Menu>
          </div>
        ),
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
      <Modal title="Assign a Zone">
        <AddWasteManagerZoneForm
          refetch={refetch}
          item={selectedItem}
          close={() => setShowModal(false)}
        />
      </Modal>
    </>
  );
};

export default WasteManagerTable;
