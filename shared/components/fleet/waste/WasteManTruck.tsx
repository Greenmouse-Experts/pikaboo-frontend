import { useGetMyUsersQuery } from '@/services/api/routineSlice';
import React, {useState} from 'react'
import { BsPersonFillAdd } from 'react-icons/bs'
import { MdFormatListBulletedAdd } from 'react-icons/md'
import CreateWasteManagerForm from './CreateWasteManger';
import WasteManagerTable from '../../admin/staff/waste/WasteManagerTable';

const FleetWasteManagerTruck = () => {
    const [open, setOpen] = useState<number>(1);
    const {data, refetch, isLoading} = useGetMyUsersQuery()
  
    const waste = data?.data?.filter((where: any) => where.account_type === "Waste Manager Truck")
  
    const handleOpen = (value:number) => {
      setOpen(open === value ? value : value);
    };
    const activeStyle = {
      backgroundColor: '#009a06',
      color: "white",
      transition: "0.6s",
    };
  return (
    <>
        <div className="p-5 lg:p-9 dash-shade rounded-lg">
          <div className="border-b pb-2">
            <ul className="flex items-center gap-x-6">
              <li className="cursor-pointer p-2 rounded-xl px-4" style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}>
                <div className="flex kitems-center gap-x-2">
                  <MdFormatListBulletedAdd className="text-2xl" />
                  <p className="fw-500">Truck Managers Listing</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 rounded-xl px-4" style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}>
                <div className="flex kitems-center gap-x-2">
                  <BsPersonFillAdd className="text-2xl" />
                  <p className="fw-500">Add New Truck Manager</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            {
              open === 1? waste && !!waste.length && <WasteManagerTable data={waste}/> : ""
            }
            {
              open === 2? <CreateWasteManagerForm refetch={refetch}/> : ""
            }
          </div>
        </div>
    </>
  )
}

export default FleetWasteManagerTruck