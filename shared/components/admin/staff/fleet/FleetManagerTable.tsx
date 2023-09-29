import React, { FC,useMemo, useState } from "react";
import Table from "../../../Ui/table";
import { UserData } from "@/shared/utils/types/auth";
import dayjs from "dayjs";
import { FormatStatus } from "@/shared/utils/format";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../../Ui/dropdown";
import useModal from "@/hooks/useModal";
import ReusableModal from "@/shared/components/helpers/ReusableModal";
import { useLazyUpdateUserStatusQuery } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { BsGear } from "react-icons/bs";
import { useLazySendLoginQuery } from "@/services/api/residenceSlice";

interface Props {
  data: UserData[]
  refetch: () => void
}
const FleetManagerTable:FC<Props> = ({data, refetch}) => {
  const [send] = useLazySendLoginQuery()
  const sendLogin = async(id:number) => {
    setIsBusy(true)
    await send(id).then((res:any) => {
      if (res?.data?.success) {
        toast.success(res.data.message);
        setIsBusy(false);
      } else setIsBusy(false);
    })
    .catch((err:any)=>{})
  }
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row:any, index:number) => index + 1, //RDT provides index by default
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
        Header: "Date Registered",
        accessor: "created_at",
        Cell: props => dayjs(props.value).format('DD-MMM-YYYY')
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
          <div className="pl-5">
            <Menu placement="bottom-end">
              <MenuHandler>
                <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                  <BsGear className="text-xl" />
                </Button>
              </MenuHandler>
              <MenuList>
                {
                  row.row.original.status === "Active" &&
                    <MenuItem className="bg-red-600 text-white pt-1 fw-500" onClick={() => suspendUser(row.value)}>Suspend Admin</MenuItem>
                }
                {
                  row.row.original.status !== "Active" &&
                    <MenuItem className="bg-green-600 text-white pt-1 fw-500" onClick={() => unSuspendUser(row.value)}>Activate Admin</MenuItem>
                }
                <MenuItem className="mt-1 bg-blue-100 pt-1" onClick={() => sendLogin(row.value)}>
                  Resend Details
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        )
      }
    ], // eslint-disable-next-line
    []
  );

  const [isBusy, setIsBusy] = useState(false)
  const {Modal, setShowModal} = useModal()
  const {Modal:Unsuspend, setShowModal:showUnsuspend} = useModal()
  const [suspend] = useLazyUpdateUserStatusQuery()
  const [selectedItem, setSelectedItem] = useState('')
  const suspendUser = (id:any) => {
    setSelectedItem(id)
    setShowModal(true)
  }
  const unSuspendUser = (id:any) => {
    setSelectedItem(id)
    showUnsuspend(true)
  }
  const ChangeStatus = async(id:any) => {
    setIsBusy(true)
    await suspend(id)
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        refetch()
        setShowModal(false)
        showUnsuspend(false)
        setIsBusy(false);
      }
      Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
        toast.error(value[0]);
      });
    })
    .catch(() => {});
  }

  const list = useMemo(() => data, [data]);
  return (
    <>
        <div className="lg:p-4">
        <Table columns={columns} data={list} />
        </div>
        <Modal title="" noHead>
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
    </>
  );
};

export default FleetManagerTable;