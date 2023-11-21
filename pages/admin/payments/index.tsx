import React, {useState} from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import WalletPaymentTable from '@/shared/components/admin/payments/WalletPaymentTable';
import { useGetTransactionQuery } from '@/services/api/routineSlice';
import { CircleLoader } from '@/shared/components/Ui/Loading';
import EmptyState from '@/shared/components/Ui/EmptyState';

const PaymentsPage:AppPage = () => {
    const { data, isLoading } = useGetTransactionQuery()
    const [open, setOpen] = useState<number>(1);
    const topup = data?.data?.filter((where:any) => where.type === "Top Up")
    const special = data?.data?.filter((where:any) => where.type === "Special Request")
    const bin = data?.data?.filter((where:any) => where.type === "Bin Monthly Payment")
    const bill = data?.data?.filter((where:any) => where.type === "Bill Monthly Payment")
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
                  <p className="fw-500">Money in Wallet</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 px-4" style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}>
                <div className="flex kitems-center gap-x-2">
                  <p className="fw-500">Bills Payment</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 px-4" style={open === 3 ? activeStyle : undefined}
              onClick={() => handleOpen(3)}>
                <div className="flex kitems-center gap-x-2">
                  <p className="fw-500">Bin Payment</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 px-4" style={open === 4 ? activeStyle : undefined}
              onClick={() => handleOpen(4)}>
                <div className="flex kitems-center gap-x-2">
                  <p className="fw-500">Special Request</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            {
              isLoading && <div className='flex justify-center py-12'><CircleLoader size='100'/></div>
            }
            {
              open === 1? <div>
                {
                  data && !topup?.length && <EmptyState imageClass='w-24 mx-auto pt-12' message='No Topup done by residents'/>
                }
                {
                  data && !!topup?.length && <WalletPaymentTable data={topup}/>
                }
              </div> : ""
            }
            {
              open === 2? <div>
                {
                  data && !bill?.length && <EmptyState imageClass='w-24 mx-auto pt-12' message='No bill payment done by residents'/>
                }
                {
                  data && !!bill?.length && <WalletPaymentTable data={bill}/>
                }
              </div> : ""
            }
            {
              open === 3? <div>
                {
                  data && !bin?.length && <EmptyState imageClass='w-24 mx-auto pt-12' message='No bin payment done by residents'/>
                }
                {
                  data && !!bin?.length && <WalletPaymentTable data={bin}/>
                }
              </div> : ""
            }
            {
              open === 4? <div>
                {
                  data && !special?.length && <EmptyState imageClass='w-24 mx-auto pt-12' message='No special request payment yet'/>
                }
                {
                  data && !!special?.length && <WalletPaymentTable data={special}/>
                }
              </div> : ""
            }
          </div>
        </div>
        </div>
    </>
  )
}

export default PaymentsPage
PaymentsPage.Layout = 'Dashboard'