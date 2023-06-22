import Link from 'next/link'
import React from 'react'

const SpecialRequestMiniTable = () => {
  return (
    <>
    <div>
        <div className="flex justify-between border-b pb-2">
        <p className="fw-600 lg:fs-700">Special Requests</p>
        <Link href='/admin/waste-area' className="text-primary fw-500 underline fs-500">See all</Link>
        </div>
        <div className="mt-8">
          <div className="-my-2 overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="overflow-hidden  sm:rounded-lg">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead className="thead-light bg-light">
                    <tr>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">Home Address</th>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">No of Bin</th>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">Sanitation Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white" >
                    <tr>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">2 Cresent block, Ubowo</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">7</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">30-06-23</td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">30 Nimbuss, Oluku </td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">3</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">28-06-23</td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">34 Off Haij, Wasota</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">7</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">13-06-23</td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">04, Flap Esate, Adolo</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">13</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">10-06-23</td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">PO, Box Traste, New Benin</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">63</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">10-06-23</td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">7, Roundabout, Egor West</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">107</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">09-06-23</td>
                    </tr>
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