import React, { FC, useMemo, useState } from "react";
import Table from "../../Ui/table";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../Ui/dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import useModal from "@/hooks/useModal";
import { TruckItem } from "@/shared/utils/types/routine";
import EditTruck from "./EditTruck";
import { useLazyDeleteTrucksQuery } from "@/services/api/wasteSlice";
import { toast } from "react-toastify";
import ReusableModal from "../../helpers/ReusableModal";
import dayjs from "dayjs";

interface Props {
  data: TruckItem[];
  refetch: () => void;
}
const WasteTruckTable: FC<Props> = ({ data, refetch }) => {
  const { Modal, setShowModal } = useModal();
  const { Modal:Delete, setShowModal:showDelete } = useModal();
  const [isBusy, setIsBusy] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>();
  const [delTruck] = useLazyDeleteTrucksQuery()
  const openModal = (item: any) => {
    setShowModal(true);
    setSelectedItem(item);
  };
  const openDelete = (item: any) => {
    showDelete(true);
    setSelectedItem(item);
  };
  const deleteTruck = async (data:any) => {
    setIsBusy(true);
    const payload = {
      truck_id: data
    }
    await delTruck(payload)
      .then((res:any) => {
        if (res.data.success) {
          toast.success(res.data.message)
          refetch()
          showDelete(false)
          setIsBusy(false);
        }else {
          toast.error(res.data.message);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error(err?.error?.data.message);
        setIsBusy(false);
      });
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
        Header: "Date Added",
        accessor: "created_at",
        Cell: (row) => dayjs(row.value).format('YYYY-MM-DD')
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
                <MenuItem className="bg-gray-100 fw-500 pt-2 mb-1" onClick={() => openModal(row.row.original)}>
                  Edit
                </MenuItem>
                <MenuItem className="bg-red-600 fw-500 text-white pt-1" onClick={() => openDelete(row.value)}>Delete</MenuItem>
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
      <Modal title="Edit Truck Details" wide>
        <EditTruck refetch={refetch}
          data={selectedItem}
          close={() => setShowModal(false)}/>
      </Modal>
      <Delete title="" noHead>
      <ReusableModal
          title="Are you sure you want to delete this truck"
          cancelTitle="No, cancel"
          actionTitle="Yes, Delete"
          closeModal={() => showDelete(false)}
          action={() => deleteTruck(selectedItem)}
          isBusy={isBusy}
        />
      </Delete>
    </>
  );
};

export default WasteTruckTable;
