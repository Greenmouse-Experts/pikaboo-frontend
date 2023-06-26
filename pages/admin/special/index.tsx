import React from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import { MdFormatListBulletedAdd } from 'react-icons/md'
import SpecialRequestTable from '@/shared/components/admin/special/SpecialReqTable'


const SpecialRequestPage:AppPage = () => {
  return (
    <>
        <div>
        <div className="h-40 bg-waste bg-cover bg-center flex items-center dash-shade rounded-xl">
          <div className="pl-12 text-white">
            <p className="text-2xl fw-600">Special Requests</p>
            <p className="fs-400 mt-2">
              Special requests for pickup from residents. 
            </p>
          </div>
        </div>
        <div className="mt-5 lg:mt-12 dash-shade p-4 lg:p-8 rounded-xl">
        <div className='flex kitems-center gap-x-2'>
                <MdFormatListBulletedAdd className='text-2xl text-primary'/>
              <p className='fw-500'>Residents Special Requests</p>
              </div>
              <div className='mt-5'>
                <SpecialRequestTable/>
              </div>
        </div>
      </div>
    </>
  )
}

export default SpecialRequestPage
SpecialRequestPage.Layout = 'Dashboard'