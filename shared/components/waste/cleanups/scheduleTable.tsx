import React, { FC, useMemo, useState } from "react";
import Table, { SelectColumnFilter } from "../../../components/Ui/table";
import { FormatStatus, formatStatus } from "@/shared/utils/format";
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
import WasteAssignModal from "./assignModal";

interface Props {
  data: any[];
  refetch: () => void
}
const WasteScheduleTable: FC<Props> = ({ data, refetch }) => {
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
        Header: "Name",
        accessor: "zone.name",
      },
      {
        Header: "Schedule Date",
        accessor: "schedule_date",
      },
      {
        Header: "Date Created",
        accessor: "created_at",
        Cell: (props:any) => dayjs(props.value).format("DD-MMM-YYYY"),
      },
      {
        Header: "Residence Count",
        accessor: "total",
        Cell: (props:any) => <p className="pl-5">{props.value}</p>
      },
      {
        Header: "Request Status",
        accessor: "all_service_personnels",
        Cell: (props:any) => !!props.value.length? <p className="text-green-600 fw-600">Submitted</p> : <p  className="text-gray-400 fw-600">Awaiting</p>,
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props) => formatStatus[props.value as keyof typeof formatStatus],
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
                  Assign Personnels
                </MenuItem>
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
      <Modal title="Assign my Personnel" wide>
        <WasteAssignModal item={selectedItem} close={() => setShowModal(false)} refetch={refetch}/>
      </Modal>
    </>
  );
};

export default WasteScheduleTable;
