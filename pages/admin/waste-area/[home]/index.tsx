import { useGetZoneResidenceQuery, useLazyGetZoneResidenceQuery } from '@/services/api/routineSlice'
import WasteAreaResidentTable from '@/shared/components/admin/wasteArea/WasteAreaResideTable'
import { AppPage } from '@/shared/components/layouts/Types'
import { ZoneResidenceResult } from '@/shared/utils/types'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdFormatListBulletedAdd} from 'react-icons/md'

const WasteAreaDetail:AppPage = () => {
  const route = useRouter()
  const id = route.query.sort
  const [zone, setZone] = useState<ZoneResidenceResult>()
  const [getZoneList] = useLazyGetZoneResidenceQuery()
  useEffect(() => {
    if(id){
      getZoneList(id)
      .then((res) => {
        if(res?.data?.success){
      setZone(res.data)
        }
      })
    }// eslint-disable-next-line
  }, [id])

  return (
    <>
        <div>
            <div className='h-40 bg-waste bg-cover bg-center flex items-center dash-shade rounded-xl'>
                <div className='pl-12 text-white'>
                    <p className='text-2xl fw-600'>{zone?.data && `${zone?.data?.name} Zone`}</p>
                    <p className='fs-400 mt-2'>View the details of all home resisdents registered under this zone.</p>
                </div>
            </div>
            <div className='p-5 dash-shade rounded-xl mt-8'>
              <div className='flex kitems-center gap-x-2'>
                <MdFormatListBulletedAdd className='text-2xl text-primary'/>
              <p className='fw-500'>Home Residents</p>
              </div>
              <div className='mt-5'>
                {zone && !!zone?.data?.residence?.length && <WasteAreaResidentTable data={zone?.data?.residence}/>}
              </div>
            </div>
        </div>
    </>
  )
}

export default WasteAreaDetail
WasteAreaDetail.Layout = 'Dashboard'