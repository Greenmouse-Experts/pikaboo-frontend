import React, {useState} from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import WalletPaymentTable from '@/shared/components/admin/payments/WalletPaymentTable';

const PaymentsPage:AppPage = () => {

    const [open, setOpen] = useState<number>(1);

    const handleOpen = (value:number) => {
      setOpen(open === value ? value : value);
    };
    const activeStyle = {
      borderBottom: '4px solid #009a06',
      color: "#009a06",
      transition: "0.6s",
    };
  return (
    <>
        <div>
        <div className="h-40 bg-waste bg-cover bg-center flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Payments on Pikaboo</p>
            <p className="fs-400 mt-2">
              All payments from residents on pikaboo
            </p>
          </div>
        </div>
        <div className="p-5 lg:p-9 dash-shade mt-5 lg:mt-10 rounded-lg">
          <div className="border-b">
            <ul className="flex items-center gap-x-6">
              <li className="cursor-pointer p-2 px-4" style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}>
                <div className="flex kitems-center gap-x-2">
                  {/* <MdFormatListBulletedAdd className="text-2xl" /> */}
                  <p className="fw-500">Money in Wallet</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 px-4" style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}>
                <div className="flex kitems-center gap-x-2">
                  {/* <BsPersonFillAdd className="text-2xl" /> */}
                  <p className="fw-500">Bills Payment</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 px-4" style={open === 3 ? activeStyle : undefined}
              onClick={() => handleOpen(3)}>
                <div className="flex kitems-center gap-x-2">
                  {/* <BsPersonFillAdd className="text-2xl" /> */}
                  <p className="fw-500">Bin Payment</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 px-4" style={open === 4 ? activeStyle : undefined}
              onClick={() => handleOpen(4)}>
                <div className="flex kitems-center gap-x-2">
                  {/* <BsPersonFillAdd className="text-2xl" /> */}
                  <p className="fw-500">Special Request</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            {
              open === 1? <WalletPaymentTable/> : ""
            }
            {
              open === 2? <WalletPaymentTable/>  : ""
            }
          </div>
        </div>
        </div>
    </>
  )
}

export default PaymentsPage
PaymentsPage.Layout = 'Dashboard'