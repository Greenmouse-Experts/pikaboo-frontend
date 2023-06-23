import React from "react";
import Link from "next/link";

const WasteAreaMainTable = () => {
  return (
    <>
      <div>
        <div className="flex justify-between border-b pb-2">
        <p className="fw-600 lg:fs-700">Waste Areas (Zones)</p>
        </div>
        <div className="mt-8">
          <div className="-my-2 overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="overflow-hidden  sm:rounded-lg">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead className="thead-light bg-light">
                    <tr>
                    <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">Zone ID</th>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">Zone</th>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">No of Residents</th>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">Area Covered (km)</th>
                      <th className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left">Last Sanitation</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white" >
                    <tr>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left text-primary fw-500"><Link href='/admin/waste-area/home'>PB-470123</Link></td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">Ugbowo Central</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">47</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">147Km</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">30-May-2023</td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left text-primary fw-500">PB-070123</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">Oluku</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">37</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">107Km</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">28-May-2023</td>
                    </tr>
                    <tr>
                    <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left text-primary fw-500">PB-08900</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">Wasota Draft</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">77</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">201Km</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">13-May-2023</td>
                    </tr>
                    <tr>
                    <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left text-primary fw-500">PB-033123</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">Adolo Central</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">13</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">87Km</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">10-May-2023</td>
                    </tr>
                    <tr>
                    <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left text-primary fw-500">PB-000883</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">New Benin</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">63</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">67Km</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">10-May-2023</td>
                    </tr>
                    <tr>
                    <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left text-primary fw-500">PB-855123</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4 py-4 text-left">Egor West</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">107</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">101Km</td>
                      <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 pl-4  py-4 text-left">09-May-2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WasteAreaMainTable;
