import React, { FC, useMemo, useState } from "react";
import Table from "../../../components/Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import { UserData } from "@/shared/utils/types/auth";
import dayjs from "dayjs";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../../components/Ui/dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import useModal from "@/hooks/useModal";
import ReusableModal from "../../helpers/ReusableModal";

interface Props {
  data: UserData[];
  refetch: () => void;
}
const ServicePersonnelTable: FC<Props> = ({ data, refetch }) => {
  const [isBusy, setIsBusy] = useState(false)
  const { Modal, setShowModal } = useModal();
  const [selectedItem, setSelectedItem] = useState<any>();
  const openModal = (item: any) => {
    setShowModal(true);
    setSelectedItem(item);
  };
  const suspendPersonnel = () => {

  }

  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Pikaboo ID",
        accessor: "pikaboo_id",
        Cell: (props:any) => <p className="fw-600 text-primary">{props.value}</p>
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
              <MenuList className="lg:w-48">
                {/* <MenuItem onClick={() => openModal(row.row.original)}>
                  View Details
                </MenuItem> */}
                <MenuItem className="bg-red-600 pt-1 fw-500 text-white" onClick={() => openModal(row.row.original)}>Suspend</MenuItem>
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
      <div className="lg:p-8 lg:pt-12 dash-shade">
        <Table columns={columns} data={list} />
      </div>
      <Modal title="" noHead>
        {/* <FleetAssignWasteManager
          refetch={refetch}
          item={selectedItem}
          close={() => setShowModal(false)}
        /> */}
        <ReusableModal
          title="Are you sure you want to suspend this Personnel"
          cancelTitle="No, cancel"
          actionTitle="Yes, Suspend"
          closeModal={() => setShowModal(false)}
          action={suspendPersonnel}
          isBusy={isBusy}
        />
      </Modal>
    </>
  );
};

export default ServicePersonnelTable;
