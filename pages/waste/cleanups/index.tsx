import React from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import { useWasteGetScheduleQuery } from '@/services/api/scheduleSlice'
import WasteScheduleTable from '@/shared/components/waste/cleanups/scheduleTable'

const WasteCleanup:AppPage = () => {
    const {data, isLoading} = useWasteGetScheduleQuery()
  return (
    <>
        <div>
            <div className=''>
                <p className='fw-500 '>My Zone Schedule Cleanup</p>
                <div className='mt-5 shades p-3'>

                </div>
            </div>
            <div className='mt-5'>
                <p className='fw-500 lg:text-xl'>Pikaboo Scheduled Cleanups</p>
                <div className='dash-shade py-6 px-2'>
                    {data && !!data?.data?.length && <WasteScheduleTable data={data?.data}/>}
                </div>
            </div>
        </div>
    </>
  )
}

export default WasteCleanup
WasteCleanup.Layout = 'Dashboard'