import React, { FC, useState, useMemo } from "react";
import Table from "../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import dayjs from "dayjs";
import { AiFillEdit } from "react-icons/ai";
import useModal from "@/hooks/useModal";
import EditCategory from "./EditCategory";
import { BsExclamationDiamond } from 'react-icons/bs'
import ReusableModal from "../../helpers/ReusableModal";
import { useLazyDeactivateCategoryQuery } from "@/services/api/shopSlice";
import { toast } from "react-toastify";

interface Props{
  data: any
  refetch: () => void
}
const CategoryTable:FC<Props> = ({data, refetch}) => {
    const {Modal, setShowModal} = useModal();
    const [isBusy, setIsBusy] = useState(false)
    const [deactive] = useLazyDeactivateCategoryQuery()
    const {Modal: Deactivate, setShowModal: showDeactivate} = useModal()
    const {Modal: Activate, setShowModal: showActivate} = useModal()
    const [selectedItem, setSeletedItem] = useState<any>()
    const editCategory = (item:any) => {
        setSeletedItem(item)
        setShowModal(true)
    }
    const deactivateCategory = (item:any) => {
        setSeletedItem(item)
        showDeactivate(true)
    }
    const activateCategory = (item:any) => {
        setSeletedItem(item)
        showActivate(true)
    }
    const deactivateCat = async(item:any) => {
        const formData = new FormData();
        formData.append("category_id", item);
        await deactive(formData)
        .then((res: any) => {
            if (res.data.success) {
              toast.success(res.data.message);
              setIsBusy(false);
              refetch()
              showDeactivate(false)
              showActivate(false)
            } else {
              toast.error(res.data.message);
              setIsBusy(false);
            }
          })
          .catch((err) => {
            toast.error(err?.error?.data.message);
            setIsBusy(false);
          });
    }
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Category Name",
        accessor: "name",
      },
      {
        Header: "Date Created",
        accessor: "created_at",
        Cell: (props: any) => dayjs(props.value).format('DD-MMM-YYYY')
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props: any) =>
          FormatStatus[props.value as keyof typeof FormatStatus],
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: (row: any) =>
          <div className="flex items-center gap-x-2">
            <p><AiFillEdit className="text-xl text-gray-500" onClick={() => editCategory(row.row.original)}/></p>
          {row.row.original.status === "Active"? <BsExclamationDiamond className="text-red-600 text-xl" onClick={() => deactivateCategory(row.value)}/> : <BsExclamationDiamond className="text-green-600 text-xl" onClick={() => activateCategory(row.value)}/>}
          </div>
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
        <Modal title="Edit Category">
            <EditCategory item={selectedItem} close={() => setShowModal(false)} refetch={refetch}/>
        </Modal>
        <Deactivate title="" noHead>
            <ReusableModal
                title="Are you sure you want to deactivate this category?"
                closeModal={() => showDeactivate(false)}
                cancelTitle="No, Cancel"
                actionTitle="Yes, Deactivate"
                action={() => deactivateCat(selectedItem)}
                isBusy={isBusy}
            />
        </Deactivate>
        <Activate title="" noHead>
            <ReusableModal
                title="Are you sure you want to activate this category?"
                closeModal={() => showDeactivate(false)}
                cancelTitle="No, Cancel"
                actionTitle="Yes, Activate"
                action={() => deactivateCat(selectedItem)}
                isBusy={isBusy}
            />
        </Activate>
    </>
  );
};

export default CategoryTable;
