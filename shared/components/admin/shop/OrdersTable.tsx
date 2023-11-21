import React, { FC, useState, useMemo } from "react";
import Table from "../../Ui/table";
import { formatStatus } from "@/shared/utils/format";
import dayjs from "dayjs";
import { AiFillEdit } from "react-icons/ai";
import useModal from "@/hooks/useModal";
import ChangeStatus from "./ChangeStatus";

interface Props {
  data: any;
  refetch: () => void;
}
const OrdersTable: FC<Props> = ({ data, refetch }) => {
  const { Modal, setShowModal } = useModal();
  const [selectedItem, setSeletedItem] = useState<any>();
  const editCategory = (item: any) => {
    setSeletedItem(item);
    setShowModal(true);
  };
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Reference ID",
        accessor: "invoice_number",
        Cell: (props: any) => (
          <p className="text-primary fw-600">{props.value}</p>
        ),
      },
      {
        Header: "Products",
        accessor: "product",
        id: "product_name",
        Cell: (props: any) => <p>{props.value.name}</p>,
      },
      {
        Header: "Product Quantity",
        accessor: "quantity",
        Cell: (props: any) => <p className="pl-5">{props.value}</p>,
      },
      {
        Header: "Category Image",
        accessor: "product",
        id: "product_imgs",
        Cell: (props: any) => (
          <div>
            {props.value.images.map((item: any, i: number) => (
              <img
                key={i}
                src={item.name}
                alt="product"
                className="w-12 h-12 circle"
              />
            ))}
          </div>
        ),
      },
      {
        Header: "Purchased By",
        accessor: "user",
        Cell: (props: any) => (
          <p>
            {props.value.first_name} {props.value.last_name}
          </p>
        ),
      },
      {
        Header: "Date Created",
        accessor: "created_at",
        Cell: (props: any) => dayjs(props.value).format("DD-MMM-YYYY"),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props: any) =>
          formatStatus[props.value as keyof typeof formatStatus],
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: (row: any) => (
          <div className="flex items-center gap-x-2 pl-6">
            <p>
              <AiFillEdit
                className="text-xl text-gray-500"
                onClick={() => editCategory(row.row.original)}
              />
            </p>
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
      <Modal title="Order Status">
        <ChangeStatus
          item={selectedItem}
          close={() => setShowModal(false)}
          refetch={refetch}
        />
      </Modal>
    </>
  );
};

export default OrdersTable;
