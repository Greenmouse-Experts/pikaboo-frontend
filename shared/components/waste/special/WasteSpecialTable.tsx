import React, { FC, useMemo, useState } from 'react'
import Link from 'next/link';
import Table, { SelectColumnFilter } from '../../Ui/table';
import { formatStatus } from '@/shared/utils/format';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../Ui/dropdown";
import { BsThreeDotsVertical } from 'react-icons/bs';
import useModal from '@/hooks/useModal';
import AssignSpecial from './AssignSpecial';

interface Props {
  data: any;
  refetch: () => void
}
const WasteSpecialRequestTable:FC<Props> = ({data, refetch}) => {
  const {Modal, setShowModal} = useModal()
  const [selectedItem, setSelectedItem] = useState<any>()
  const openModal = (item:any) => {
    setSelectedItem(item)
    setShowModal(true)
  }
    const columns = useMemo(
        () => [
          {
            Header: "S/N",
            accessor: (row: any, index: number) => index + 1, //RDT provides index by default
          },
          {
            Header: "Residence ID",
            accessor: "home_residence.pikaboo_id",
            Cell: (row: any) => (
              <Link href={{
                pathname: `/admin/residents/details`,
                query: {
                  sort: row.row.original.home_residence.id,
                }}} className="fw-500 text-primary">{row.value}</Link>
            ),
          },
          {
            Header: "Zone",
            accessor: "home_residence.zone.name",
          },
          {
            Header: "Address",
            accessor: "alt_address",
            Cell: (row) => row?.value? row.value : row.row.original.home_residence.address
          },
          {
            Header: "Phone Number",
            accessor: "home_residence.phone",
          },
          {
            Header: "Assigned Personnel",
            accessor: "service_personnel",
            Cell: (row) => row?.value? `${row.value.first_name} ${row.value.last_name}` : "None"
          },
          {
            Header: "Date Requested",
            accessor: "schedule_date",
            Filter: SelectColumnFilter,
            filter: "includes",
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
            Cell: (row) => (
              <div>
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                      <BsThreeDotsVertical className="text-xl" />
                    </Button>
                  </MenuHandler>
                  <MenuList className="lg:w-48">
                    <MenuItem className="bg-gray-100 fw-500 pt-2 mb-1" onClick={() => openModal(row.value)}>
                      Assign Personnel
                    </MenuItem>
                    {/* <MenuItem className="bg-red-600 fw-500 text-white pt-1" onClick={() => openDelete(row.value)}>Delete</MenuItem> */}
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
          <div className="lg:p-4 w-full">
            <Table columns={columns} data={list} />
          </div>
          <Modal title='Assign Special Request'>
            <AssignSpecial close={() => setShowModal(false)} id={selectedItem} refetch={refetch}/>
          </Modal>
        </>
      );
}

export default WasteSpecialRequestTable