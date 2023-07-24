import React, { FC, useMemo, useState } from "react";
import Table from "../../Ui/table";
import { UserData } from "@/shared/utils/types/auth";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../Ui/dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import useModal from "@/hooks/useModal";

interface Props {
  data: UserData[];
  refetch: () => void;
}
const WasteTruckTable: FC<Props> = ({ data, refetch }) => {
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
        Header: "Vehicle Tag",
        accessor: "pikaboo_tag_id",
        Cell: (row: any) => <p className="fw-500 text-primary">{row.value}</p>,
      },
      {
        Header: "Vehicle Make",
        accessor: "make",
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "VIN",
        accessor: "vin",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Color",
        accessor: "color",
      },
      {
        Header: "Fuel Type",
        accessor: "fuel_type",
      },
      {
        Header: "Purchase Date",
        accessor: "date_purchase",
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
                  Edit
                </MenuItem>
                <MenuItem className="bg-red-600 text-white">Delete</MenuItem>
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
      <div className="lg:p-4 dash-shade">
        <Table columns={columns} data={list} />
      </div>
      <Modal title="Assign a Zone">
        {/* <FleetAssignWasteManager
          refetch={refetch}
          item={selectedItem}
          close={() => setShowModal(false)}
        /> */}
      </Modal>
    </>
  );
};

export default WasteTruckTable;
