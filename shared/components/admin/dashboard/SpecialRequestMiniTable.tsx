import { formatStatus } from '@/shared/utils/format'
import Link from 'next/link'
import React, {FC} from 'react'

interface Props {
  data: any[]
}
const SpecialRequestMiniTable:FC<Props> = ({data}) => {
  return (
    <>
    <div>
        <div className="flex justify-between w-full overflow-x-auto border-b pb-2">
        <p className="fw-600 lg:fs-700">Special Requests</p>
        <Link href='/admin/special/' className="text-primary fw-500 underline fs-500">See all</Link>
        </div>
        <div className="mt-8">
          <div className="-my-2 overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="overflow-hidden  sm:rounded-lg">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead className="thead-light bg-light">
                    <tr>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">Home Address</th>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">Sanitation Date</th>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">Request Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white" >
                    {
                      data && data.length && data.map((item:any, i:number) => (
                        <tr key={i}>
                        <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">{item.alt_address? item.alt_address : item.home_residence.address? item.home_residence.address : ""}</td>
                        <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">{item.schedule_date}</td>
                        <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">{formatStatus[item.status as keyof typeof formatStatus]}</td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecialRequestMiniTable